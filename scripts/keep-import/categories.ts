/**
 * How each Phrozen Keep knowledge base category maps onto diablo2.org.
 * Keyed by the Keep's category_id. `appliesTo` repeats the Keep's own version label;
 * it is not a compatibility claim we have checked.
 */
export type KbGroup = "tutorials" | "file-guides" | "reference" | "community";
export type KbGame = "legacy" | "d2r";

export interface KbCategoryDef {
  slug: string;
  title: string;
  group: KbGroup;
  game: KbGame;
  appliesTo?: string;
}

export const CATEGORY_MAP: Record<number, KbCategoryDef> = {
  4: { slug: "file-guides", title: "File guides (1.10 to 1.14)", group: "file-guides", game: "legacy", appliesTo: "1.10 to 1.14" },
  26: { slug: "file-guides-1-09", title: "File guides (1.09)", group: "file-guides", game: "legacy", appliesTo: "1.09" },
  40: { slug: "file-guides-1-08", title: "File guides (1.08)", group: "file-guides", game: "legacy", appliesTo: "1.08" },
  41: { slug: "file-guides-1-00-1-06", title: "File guides (1.00 to 1.06)", group: "file-guides", game: "legacy", appliesTo: "1.00 to 1.06" },
  44: { slug: "txt-file-guides-d2r", title: "TXT file guides (D2R)", group: "file-guides", game: "d2r", appliesTo: "D2R / 1.15" },
  45: { slug: "json-file-guides-d2r", title: "JSON file guides (D2R)", group: "file-guides", game: "d2r", appliesTo: "D2R / 1.15" },

  32: { slug: "tutorials-code-editing", title: "Code editing", group: "tutorials", game: "legacy", appliesTo: "1.10 and later" },
  31: { slug: "tutorials-cube-recipes", title: "Cube recipes", group: "tutorials", game: "legacy", appliesTo: "1.10 and later" },
  33: { slug: "tutorials-mod-setup", title: "Mod setup", group: "tutorials", game: "legacy", appliesTo: "1.10 and later" },
  36: { slug: "tutorials-graphics-and-sound", title: "Graphics and sound files", group: "tutorials", game: "legacy", appliesTo: "1.10 and later" },
  35: { slug: "tutorials-item-mechanics", title: "Item mechanics", group: "tutorials", game: "legacy", appliesTo: "1.10 and later" },
  39: { slug: "tutorials-map-making", title: "Map making", group: "tutorials", game: "legacy", appliesTo: "1.10 and later" },
  34: { slug: "tutorials-skill-mechanics", title: "Skill mechanics", group: "tutorials", game: "legacy", appliesTo: "1.10 and later" },
  38: { slug: "tutorials-unit-mechanics", title: "Unit mechanics", group: "tutorials", game: "legacy", appliesTo: "1.10 and later" },
  37: { slug: "tutorials-ui-mechanics", title: "User interface mechanics", group: "tutorials", game: "legacy", appliesTo: "1.10 and later" },
  5: { slug: "general-tutorials", title: "General tutorials", group: "tutorials", game: "legacy" },
  27: { slug: "tutorials-1-09", title: "Tutorials (1.09)", group: "tutorials", game: "legacy", appliesTo: "1.09" },
  42: { slug: "tutorials-1-08", title: "Tutorials (1.08)", group: "tutorials", game: "legacy", appliesTo: "1.08" },
  43: { slug: "tutorials-1-00-1-06", title: "Tutorials (1.00 to 1.06)", group: "tutorials", game: "legacy", appliesTo: "1.00 to 1.06" },
  46: { slug: "tutorials-d2r", title: "Tutorials (D2R)", group: "tutorials", game: "d2r", appliesTo: "D2R / 1.15" },

  21: { slug: "charts-and-tables", title: "Charts and tables", group: "reference", game: "legacy" },
  19: { slug: "game-mechanics", title: "Game mechanics", group: "reference", game: "legacy" },
  22: { slug: "dll-editing", title: "DLL editing", group: "reference", game: "legacy" },
  20: { slug: "file-formats", title: "File formats", group: "reference", game: "legacy" },
  30: { slug: "historical-references", title: "Historical references", group: "reference", game: "legacy" },

  7: { slug: "articles", title: "Articles", group: "community", game: "legacy" },
  8: { slug: "faq", title: "Frequently asked questions", group: "community", game: "legacy" },
  9: { slug: "humor", title: "Humor", group: "community", game: "legacy" },
  10: { slug: "interviews", title: "Interviews", group: "community", game: "legacy" },
  11: { slug: "mod-reviews", title: "Mod reviews", group: "community", game: "legacy" },
  23: { slug: "naming-resources", title: "Naming resources", group: "community", game: "legacy" },
  24: { slug: "keep-updates", title: "Keep updates", group: "community", game: "legacy" },
  29: { slug: "mod-concepts", title: "Mod concepts", group: "community", game: "legacy" },
};
