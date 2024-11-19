import { langId } from "./translation";

export const routeTranslations = {
    home: {
        [langId.PT]: "",
        [langId.EN]: "en",
    },
    sobre: {
        [langId.PT]: "sobre",
        [langId.EN]: "about",
    },
    arquivo: {
        [langId.PT]: "arquivo",
        [langId.EN]: "archive",
    },
};

export const langRouteMap = {
    [langId.EN]: {
        "": "en",
        sobre: "about",
        arquivo: "archive",
    },
    [langId.PT]: {
        en: "",
        about: "sobre",
        archive: "arquivo",
    },
};
