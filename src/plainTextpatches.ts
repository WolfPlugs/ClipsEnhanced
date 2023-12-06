import { types } from "replugged";

export default [
  {
    find: "Messages.CLIPS_LENGTH_MINUTES",
    replacements: [
      {
        match: /Messages\.CLIPS_LENGTH_MINUTES\.format\({count:2}\)}/,
        replace: (prefix) => `${prefix},...window.replugged.plugins.getExports("dev.wolfplugs.ClipsEnhanced").customOptions()`,
      },
    ],
  },
] as types.PlaintextPatch[];
