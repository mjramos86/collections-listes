"use client";
import { useState, useMemo } from "react";
import type { Collection, ListItem, FieldDef } from "@/lib/types";

function genId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

interface Props {
  collection: Collection;
  onUpdate: (c: Collection) => void;
  onBack: () => void;
  onDelete: () => void;
}

export default function CollectionView({ collection, onUpdate, onBack, onDelete }: Props) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const [sortField, setSortField] = useState(collection.sortField);
  const [sortDir, setSortDir] = useState<"asc" | "desc">(collection.sortDir);
  const [addingItem, setAddingItem] = useState(false);
  const [newItemFields, setNewItemFields] = useState<Record<string, string>>({});
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const progress = useMemo(() => {
    const done = collection.items.filter((i) => i.completed).length;
    return { done, total: collection.items.length, pct: collection.items.length ? Math.round((done / collection.items.length) * 100) : 0 };
  }, [collection.items]);

  const displayed = useMemo(() => {
    let items = [...collection.items];
    if (filter === "completed") items = items.filter((i) => i.completed);
    if (filter === "pending") items = items.filter((i) => !i.completed);
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((i) =>
        collection.fields.some((f) => String(i.fields[f.key] ?? "").toLowerCase().includes(q))
      );
    }
    items.sort((a, b) => {
      const av = a.fields[sortField] ?? "";
      const bv = b.fields[sortField] ?? "";
      const aNum = Number(av), bNum = Number(bv);
      const cmp = !isNaN(aNum) && !isNaN(bNum) ? aNum - bNum : String(av).localeCompare(String(bv));
      return sortDir === "asc" ? cmp : -cmp;
    });
    return items;
  }, [collection.items, collection.fields, filter, search, sortField, sortDir]);

  function toggleSort(key: string) {
    if (sortField === key) {
      const nd = sortDir === "asc" ? "desc" : "asc";
      setSortDir(nd);
      onUpdate({ ...collection, sortField: key, sortDir: nd });
    } else {
      setSortField(key);
      setSortDir("asc");
      onUpdate({ ...collection, sortField: key, sortDir: "asc" });
    }
  }

  function toggleComplete(id: string) {
    onUpdate({
      ...collection,
      items: collection.items.map((i) => i.id === id ? { ...i, completed: !i.completed } : i),
    });
  }

  function deleteItem(id: string) {
    onUpdate({ ...collection, items: collection.items.filter((i) => i.id !== id) });
  }

  function saveNewItem() {
    const fields: Record<string, string | number> = {};
    for (const f of collection.fields) {
      const v = newItemFields[f.key] ?? "";
      fields[f.key] = f.type === "number" ? (Number(v) || 0) : v;
    }
    const item: ListItem = { id: genId(), completed: false, fields };
    onUpdate({ ...collection, items: [...collection.items, item] });
    setNewItemFields({});
    setAddingItem(false);
  }

  const textFields = collection.fields.filter((f) => f.type === "text");
  const primaryField = collection.fields[0];
  // Columns to show in table (limit to avoid overflow): show up to 5 key fields
  const tableFields = collection.fields.slice(0, 5);
  const extraFields = collection.fields.slice(5);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>
      {/* Header */}
      <div className="sticky top-0 z-20 px-4 py-3 flex items-center gap-3" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm font-medium hover:opacity-80" style={{ color: "var(--text2)" }}>
          ← Back
        </button>
        <span style={{ color: "var(--border)" }}>|</span>
        <span className="text-xl">{collection.icon}</span>
        <h1 className="font-bold text-base flex-1 truncate" style={{ color: "var(--text)" }}>{collection.name}</h1>
        <button
          onClick={() => setConfirmDelete(true)}
          className="text-xs px-2 py-1 rounded font-medium hover:opacity-80"
          style={{ color: "var(--red)", border: "1px solid var(--border)", background: "var(--surface2)" }}
        >
          Delete
        </button>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 space-y-5">
        {/* Progress bar */}
        <div className="rounded-2xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-sm font-medium" style={{ color: "var(--text2)" }}>{collection.description}</div>
              <div className="text-2xl font-bold mt-0.5" style={{ color: "var(--text)" }}>
                {progress.done} <span className="text-base font-normal" style={{ color: "var(--text2)" }}>/ {progress.total} completed</span>
              </div>
            </div>
            <div className="text-3xl font-black" style={{ color: "var(--accent2)" }}>{progress.pct}%</div>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: "var(--surface2)" }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress.pct}%`, background: "linear-gradient(90deg, var(--accent), var(--accent2))" }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search…"
            className="rounded-xl px-3 py-2 text-sm outline-none flex-1 min-w-[160px]"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)" }}
          />
          <div className="flex rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            {(["all", "pending", "completed"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-3 py-2 text-sm capitalize"
                style={{
                  background: filter === f ? "var(--accent)" : "var(--surface)",
                  color: filter === f ? "#fff" : "var(--text2)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
          <button
            onClick={() => setAddingItem(true)}
            className="px-4 py-2 rounded-xl text-sm font-bold"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            + Add Item
          </button>
        </div>

        {/* Add item form */}
        {addingItem && (
          <div className="rounded-2xl p-4 space-y-3" style={{ background: "var(--surface)", border: "1px solid var(--accent)" }}>
            <div className="font-medium text-sm" style={{ color: "var(--accent)" }}>New Item</div>
            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))" }}>
              {collection.fields.map((f) => (
                <div key={f.key}>
                  <label className="block text-xs mb-1" style={{ color: "var(--text2)" }}>{f.label}</label>
                  <input
                    type={f.type === "number" ? "number" : "text"}
                    value={newItemFields[f.key] ?? ""}
                    onChange={(e) => setNewItemFields((prev) => ({ ...prev, [f.key]: e.target.value }))}
                    className="w-full rounded-lg px-3 py-1.5 text-sm outline-none"
                    style={{ background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--text)" }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={saveNewItem} className="px-4 py-1.5 rounded-xl text-sm font-bold" style={{ background: "var(--accent)", color: "#fff" }}>Save</button>
              <button onClick={() => setAddingItem(false)} className="px-4 py-1.5 rounded-xl text-sm" style={{ background: "var(--surface2)", color: "var(--text2)", border: "1px solid var(--border)" }}>Cancel</button>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--surface2)", borderBottom: "1px solid var(--border)" }}>
                  <th className="w-10 px-3 py-3 text-center" style={{ color: "var(--text2)" }}>✓</th>
                  {tableFields.map((f) => (
                    <th
                      key={f.key}
                      className="px-3 py-3 text-left whitespace-nowrap cursor-pointer select-none hover:opacity-80"
                      style={{ color: sortField === f.key ? "var(--accent2)" : "var(--text2)" }}
                      onClick={() => toggleSort(f.key)}
                    >
                      {f.label}
                      {sortField === f.key && <span className="ml-1">{sortDir === "asc" ? "↑" : "↓"}</span>}
                    </th>
                  ))}
                  {extraFields.length > 0 && (
                    <th className="px-3 py-3 text-left" style={{ color: "var(--text2)" }}>More</th>
                  )}
                  <th className="w-10 px-3 py-3" />
                </tr>
              </thead>
              <tbody>
                {displayed.map((item, idx) => (
                  <>
                    <tr
                      key={item.id}
                      className="transition-colors hover:brightness-110 cursor-pointer"
                      style={{
                        background: idx % 2 === 0 ? "var(--surface)" : "var(--surface2)",
                        borderBottom: "1px solid var(--border)",
                        opacity: item.completed ? 0.55 : 1,
                      }}
                      onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    >
                      <td className="px-3 py-3 text-center" onClick={(e) => { e.stopPropagation(); toggleComplete(item.id); }}>
                        <span
                          className="inline-flex items-center justify-center w-5 h-5 rounded border-2 transition-all"
                          style={{
                            borderColor: item.completed ? "var(--green)" : "var(--border)",
                            background: item.completed ? "var(--green)" : "transparent",
                          }}
                        >
                          {item.completed && <span className="text-xs text-black font-bold">✓</span>}
                        </span>
                      </td>
                      {tableFields.map((f) => (
                        <td key={f.key} className="px-3 py-3" style={{ color: "var(--text)", maxWidth: "200px" }}>
                          {f.type === "url" ? (
                            <a href={String(item.fields[f.key] ?? "")} target="_blank" rel="noreferrer" className="underline hover:opacity-80" style={{ color: "var(--accent2)" }} onClick={(e) => e.stopPropagation()}>
                              {String(item.fields[f.key] ?? "")}
                            </a>
                          ) : (
                            <span className="truncate block" style={{ textDecoration: item.completed ? "line-through" : "none", color: item.completed ? "var(--text2)" : "var(--text)" }}>
                              {String(item.fields[f.key] ?? "")}
                            </span>
                          )}
                        </td>
                      ))}
                      {extraFields.length > 0 && (
                        <td className="px-3 py-3" style={{ color: "var(--text2)" }}>
                          <span className="text-xs">{expandedId === item.id ? "▲" : "▼"}</span>
                        </td>
                      )}
                      <td className="px-3 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => deleteItem(item.id)} className="text-xs opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity" style={{ color: "var(--text2)" }}>✕</button>
                      </td>
                    </tr>
                    {expandedId === item.id && (
                      <tr key={`${item.id}-expanded`} style={{ background: "var(--surface2)", borderBottom: "1px solid var(--border)" }}>
                        <td />
                        <td colSpan={tableFields.length + (extraFields.length > 0 ? 1 : 0) + 1} className="px-3 py-3">
                          <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
                            {collection.fields.map((f) => (
                              <div key={f.key}>
                                <div className="text-xs font-medium mb-0.5" style={{ color: "var(--text2)" }}>{f.label}</div>
                                <div className="text-sm" style={{ color: "var(--text)" }}>{String(item.fields[f.key] ?? "—")}</div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 flex gap-2">
                            <button
                              onClick={() => toggleComplete(item.id)}
                              className="px-3 py-1 rounded-lg text-xs font-bold"
                              style={{ background: item.completed ? "var(--surface)" : "var(--green)", color: item.completed ? "var(--text2)" : "#000", border: "1px solid var(--border)" }}
                            >
                              {item.completed ? "Mark Incomplete" : "Mark Complete"}
                            </button>
                            <button
                              onClick={() => deleteItem(item.id)}
                              className="px-3 py-1 rounded-lg text-xs"
                              style={{ color: "var(--red)", border: "1px solid var(--border)", background: "var(--surface)" }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
                {displayed.length === 0 && (
                  <tr>
                    <td colSpan={tableFields.length + 3} className="px-4 py-8 text-center text-sm" style={{ color: "var(--text2)" }}>
                      No items match your filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-xs" style={{ color: "var(--text2)" }}>
          Showing {displayed.length} of {collection.items.length} items
        </div>
      </div>

      {/* Confirm delete dialog */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }}>
          <div className="w-full max-w-sm rounded-2xl p-6 space-y-4" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <h3 className="font-bold text-lg" style={{ color: "var(--text)" }}>Delete collection?</h3>
            <p className="text-sm" style={{ color: "var(--text2)" }}>
              This will permanently delete <strong style={{ color: "var(--text)" }}>{collection.name}</strong> and all {collection.items.length} items.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDelete(false)} className="flex-1 py-2 rounded-xl text-sm" style={{ background: "var(--surface2)", color: "var(--text2)", border: "1px solid var(--border)" }}>
                Cancel
              </button>
              <button onClick={onDelete} className="flex-1 py-2 rounded-xl text-sm font-bold" style={{ background: "var(--red)", color: "#fff" }}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
