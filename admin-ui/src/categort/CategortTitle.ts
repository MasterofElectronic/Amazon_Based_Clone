import { Categort as TCategort } from "../api/categort/Categort";

export const CATEGORT_TITLE_FIELD = "name";

export const CategortTitle = (record: TCategort): string => {
  return record.name?.toString() || String(record.id);
};
