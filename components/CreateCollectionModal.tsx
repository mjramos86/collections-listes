"use client";
import { useState } from "react";
import type { Collection, FieldDef, ListCategory } from "@/lib/types";

const CATEGORY_ICONS: Record<ListCategory, string> = {
  reading: "📚",
  gaming: "🎮",
  watching: "🎬",
  music: "🎵",
  other: "📋",
};

const CATEGORY_LABELS: Record<ListCategory, string> = {
  reading: "Reading List",
  gaming: "Gaming Backlog",
  watching: "Watch List",
  music: "Music List",
  other: "Other",
};

function genId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

interface Props {
  onClose: () => void;
  onCreate: (c: Collection) => void;
}

export default function CreateCollectionModal({ onClose, onCreate }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<ListCategory>("reading");
  const [fields, setFields] = useState<FieldDef[]>([
    { key: "title", label: "Title", type: "text" },
  ]);

  function addField() {
    setFields((f) => [...f, { key: genId(), label: "", type: "text" }]);
  }

  function removeField(i: number) {
    setFields((f) => f.filter((_, idx) => idx !== i));
  }

  function updateField(i: number, patch: Partial<FieldDef>) {
    setFields((f) =>
      f.map((field, idx) => (idx === i ? { ...field, ...patch } : field))
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    const sanitizedFields = fields
      .filter((f) => f.label.trim())
      .map((f) => ({ ...f, key: f.label.toLowerCase().replace(/\s+/g, "_") }));
    const collection: Collection = {
      id: genId(),
      name: name.trim(),
      description: description.trim(),
      category,
      icon: CATEGORY_ICONS[category],
      fields: sanitizedFields,
      items: [],
      createdAt: new Date().toISOString(),
      sortField: sanitizedFields[0]?.key ?? "title",
      sortDir: "asc",
    };
    onCreate(collection);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }}>
      <div className="w-full max-w-lg rounded-2xl p-6 shadow-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>New Collection</h2>
          <button onClick={onClose} className="text-2xl leading-none hover:opacity-70" style={{ color: "var(--text2)" }}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "var(--text2)" }}>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g. Gaming Backlog 2026"
              className="w-full rounded-lg px-3 py-2 text-sm outline-none focus:ring-2"
              style={{ background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--text)" }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "var(--text2)" }}>Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional description"
              className="w-full rounded-lg px-3 py-2 text-sm outline-none"
              style={{ background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--text)" }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text2)" }}>Category</label>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(CATEGORY_ICONS) as ListCategory[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all"
                  style={{
                    background: category === c ? "var(--accent)" : "var(--surface2)",
                    color: category === c ? "#fff" : "var(--text2)",
                    border: `1px solid ${category === c ? "var(--accent)" : "var(--border)"}`,
                  }}
                >
                  <span>{CATEGORY_ICONS[c]}</span>
                  {CATEGORY_LABELS[c]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium" style={{ color: "var(--text2)" }}>Columns</label>
              <button type="button" onClick={addField} className="text-xs px-2 py-1 rounded font-medium" style={{ background: "var(--surface2)", color: "var(--accent)", border: "1px solid var(--border)" }}>
                + Add Column
              </button>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-thin pr-1">
              {fields.map((field, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    value={field.label}
                    onChange={(e) => updateField(i, { label: e.target.value })}
                    placeholder="Column name"
                    className="flex-1 rounded-lg px-3 py-1.5 text-sm outline-none"
                    style={{ background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--text)" }}
                  />
                  <select
                    value={field.type}
                    onChange={(e) => updateField(i, { type: e.target.value as FieldDef["type"] })}
                    className="rounded-lg px-2 py-1.5 text-sm outline-none"
                    style={{ background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--text2)" }}
                  >
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="url">URL</option>
                  </select>
                  {fields.length > 1 && (
                    <button type="button" onClick={() => removeField(i)} className="px-2 text-sm hover:opacity-70" style={{ color: "var(--red)" }}>✕</button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-2 rounded-xl text-sm font-medium" style={{ background: "var(--surface2)", color: "var(--text2)", border: "1px solid var(--border)" }}>
              Cancel
            </button>
            <button type="submit" className="flex-1 py-2 rounded-xl text-sm font-bold" style={{ background: "var(--accent)", color: "#fff" }}>
              Create Collection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
