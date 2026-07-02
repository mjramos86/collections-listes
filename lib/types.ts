export type FieldType = "text" | "number" | "url";

export interface FieldDef {
  key: string;
  label: string;
  type: FieldType;
}

export interface ListItem {
  id: string;
  completed: boolean;
  fields: Record<string, string | number>;
}

export type ListCategory = "reading" | "gaming" | "watching" | "music" | "other";

export interface Collection {
  id: string;
  name: string;
  description: string;
  category: ListCategory;
  icon: string;
  fields: FieldDef[];
  items: ListItem[];
  createdAt: string;
  sortField: string;
  sortDir: "asc" | "desc";
}
