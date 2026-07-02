"use client";
import { useState, useEffect } from "react";
import type { Collection } from "@/lib/types";
import { initCollections, saveCollections } from "@/lib/store";
import CollectionView from "@/components/CollectionView";
import CreateCollectionModal from "@/components/CreateCollectionModal";

const CATEGORY_COLORS: Record<string, string> = {
  reading: "#7c6af7",
  gaming: "#34d399",
  watching: "#f59e0b",
  music: "#f472b6",
  other: "#94a3b8",
};

export default function Home() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const c = initCollections();
    setCollections(c);
    setLoaded(true);
  }, []);

  function updateCollection(updated: Collection) {
    const next = collections.map((c) => (c.id === updated.id ? updated : c));
    setCollections(next);
    saveCollections(next);
  }

  function createCollection(c: Collection) {
    const next = [...collections, c];
    setCollections(next);
    saveCollections(next);
    setShowCreate(false);
    setActiveId(c.id);
  }

  function deleteCollection(id: string) {
    const next = collections.filter((c) => c.id !== id);
    setCollections(next);
    saveCollections(next);
    setActiveId(null);
  }

  const active = collections.find((c) => c.id === activeId);

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--bg)" }}>
        <div className="text-sm" style={{ color: "var(--text2)" }}>Loading…</div>
      </div>
    );
  }

  if (active) {
    return (
      <CollectionView
        collection={active}
        onUpdate={updateCollection}
        onBack={() => setActiveId(null)}
        onDelete={() => deleteCollection(active.id)}
      />
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Top bar */}
      <header className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">📋</span>
          <div>
            <h1 className="font-black text-xl tracking-tight" style={{ color: "var(--text)" }}>CollectListe</h1>
            <p className="text-xs" style={{ color: "var(--text2)" }}>Your collection & completion tracker</p>
          </div>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-opacity hover:opacity-90"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          + New Collection
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {collections.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-5xl mb-4">📂</div>
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>No collections yet</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text2)" }}>Create your first collection to start tracking</p>
            <button
              onClick={() => setShowCreate(true)}
              className="px-6 py-3 rounded-xl font-bold"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              + New Collection
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: "var(--text2)" }}>
              Your Collections ({collections.length})
            </h2>
            <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
              {collections.map((c) => {
                const done = c.items.filter((i) => i.completed).length;
                const pct = c.items.length ? Math.round((done / c.items.length) * 100) : 0;
                const color = CATEGORY_COLORS[c.category] ?? CATEGORY_COLORS.other;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveId(c.id)}
                    className="text-left rounded-2xl p-5 transition-all hover:brightness-125 hover:-translate-y-0.5"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{c.icon}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium capitalize" style={{ background: `${color}22`, color }}>
                        {c.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-base mb-1 truncate" style={{ color: "var(--text)" }}>{c.name}</h3>
                    {c.description && (
                      <p className="text-xs mb-3 line-clamp-2" style={{ color: "var(--text2)" }}>{c.description}</p>
                    )}
                    <div className="flex items-center justify-between text-xs mb-2" style={{ color: "var(--text2)" }}>
                      <span>{done} / {c.items.length} completed</span>
                      <span className="font-bold" style={{ color }}>{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--surface2)" }}>
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${pct}%`, background: color }}
                      />
                    </div>
                  </button>
                );
              })}

              {/* New collection card */}
              <button
                onClick={() => setShowCreate(true)}
                className="flex flex-col items-center justify-center rounded-2xl p-5 transition-all hover:brightness-125 min-h-[140px]"
                style={{ background: "var(--surface)", border: "2px dashed var(--border)" }}
              >
                <span className="text-3xl mb-2" style={{ color: "var(--text2)" }}>+</span>
                <span className="text-sm font-medium" style={{ color: "var(--text2)" }}>New Collection</span>
              </button>
            </div>
          </>
        )}
      </main>

      {showCreate && (
        <CreateCollectionModal onClose={() => setShowCreate(false)} onCreate={createCollection} />
      )}
    </div>
  );
}
