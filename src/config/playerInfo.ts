export interface PlayerInfo {
    /**
     * TwitterID.
     */
    twitterId?: string;
    /**
     * Player image.
     */
    image?: string;
    /**
     * Should the image be displayed inline
     */
    imageInline?: boolean;
    /**
     * Fixed player name: will prevent using the GSI provided names.
     */
    name?: string;
}
export interface PlayerInfoList {
    [steamId: string]: PlayerInfo;
}
export const playerInfoList: PlayerInfoList = {
    // `76561198005627722` is Steam ID.
    "76561198031487254": { twitterId: "Absolute", image: "", imageInline: false, name: "Laz",},
    "76561198079768763": { twitterId: "Absolute", image: "", imageInline: false, name: "crow",},
    "76561198066512847": { twitterId: "Absolute", image: "", imageInline: false, name: "barce",},
    "76561198110186058": { twitterId: "Absolute", image: "", imageInline: false, name: "takej",},
    "76561198119950504": { twitterId: "Absolute", image: "", imageInline: false, name: "Reita",},
    "76561197984471745": { twitterId: "Absolute", image: "", imageInline: false, name: "JUNiOR",},
    "76561198226126036": { twitterId: "Ignis", image: "", imageInline: false, name: "Hornet",},
    "76561198073700590": { twitterId: "Ignis", image: "", imageInline: false, name: "oitaN",},
    "76561198390335552": { twitterId: "Ignis", image: "", imageInline: false, name: "REGN",},
    "76561198082854318": { twitterId: "Ignis", image: "", imageInline: false, name: "poem",},
    "76561198027163529": { twitterId: "Ignis", image: "", imageInline: false, name: "neth",},
    "76561198176383687": { twitterId: "Ignis", image: "", imageInline: false, name: "Teddyy",},
};
