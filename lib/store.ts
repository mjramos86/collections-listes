import type { Collection } from "./types";
import { marvelCollection } from "./seedData";

const STORAGE_KEY = "collections-listes-v1";

export function loadCollections(): Collection[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Collection[];
  } catch {}
  return [];
}

export function saveCollections(collections: Collection[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(collections));
}

export function initCollections(): Collection[] {
  const existing = loadCollections();
  if (existing.length > 0) return existing;
  const seed = [marvelCollection];
  saveCollections(seed);
  return seed;
}
