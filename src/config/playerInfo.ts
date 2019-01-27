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
    "76561198046852171": { twitterId: "HentaiWeeabooMasterLords", image: "", imageInline: false, name: "guin",},
    "76561198209623524": { twitterId: "HentaiWeeabooMasterLords", image: "", imageInline: false, name: "4qu1la",},
    "76561198174903174": { twitterId: "HentaiWeeabooMasterLords", image: "", imageInline: false, name: "LAF",},
    "76561198176870103": { twitterId: "HentaiWeeabooMasterLords", image: "", imageInline: false, name: "yasu",},
    "76561198172212198": { twitterId: "HentaiWeeabooMasterLords", image: "", imageInline: false, name: "sakurai",},
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
    "76561198125313996": { twitterId: "All Rejection Gaming", image: "", imageInline: false, name: "Gobur1N",},
    "76561198125973704": { twitterId: "All Rejection Gaming", image: "", imageInline: false, name: "J0hnny",},
    "76561198120012080": { twitterId: "All Rejection Gaming", image: "", imageInline: false, name: "CalaC",},
    "76561198167516758": { twitterId: "All Rejection Gaming", image: "", imageInline: false, name: "Radical",},
    "76561198088091430": { twitterId: "All Rejection Gaming", image: "", imageInline: false, name: "Jastyis",},
    "76561198141791283": { twitterId: "All Rejection Gaming", image: "", imageInline: false, name: "ni_so_genwaku",},
    "76561198015392646": { twitterId: "Updraft", image: "", imageInline: false, name: "Sen",},
    "76561198105727247": { twitterId: "Updraft", image: "", imageInline: false, name: "Malinho!",},
    "76561198058379795": { twitterId: "Updraft", image: "", imageInline: false, name: "aumlinho",},
    "76561198056006381": { twitterId: "Updraft", image: "", imageInline: false, name: "Ayanox",},
    "76561198130830782": { twitterId: "Updraft", image: "", imageInline: false, name: "RIPablo",},
    "76561198834488181": { twitterId: "SCARZ", image: "", imageInline: false, name: "Winter",},
    "76561198250202604": { twitterId: "SCARZ", image: "", imageInline: false, name: "Anker",},
    "76561198362442026": { twitterId: "SCARZ", image: "", imageInline: false, name: "1000000",},
    "76561197983294391": { twitterId: "SCARZ", image: "", imageInline: false, name: "bazooka",},
    "76561198027383193": { twitterId: "SCARZ", image: "", imageInline: false, name: "EROC",},
    "76561198039444491": { twitterId: "SCARZ", image: "", imageInline: false, name: "Hakuja",},
    "76561198047133728": { twitterId: "SCARZ", image: "", imageInline: false, name: "mikke",},
    "76561198152054718": { twitterId: "TeamDWFN", image: "", imageInline: false, name: "Marmelo",},
    "76561198137991270": { twitterId: "TeamDWFN", image: "", imageInline: false, name: "Alter",},
    "76561198217689016": { twitterId: "TeamDWFN", image: "", imageInline: false, name: "Glim",},
    "76561198119348291": { twitterId: "TeamDWFN", image: "", imageInline: false, name: "MerRy",},
    "76561198346470086": { twitterId: "TeamDWFN", image: "", imageInline: false, name: "Whim",},
    "76561198052784204": { twitterId: "TeamDWFN", image: "", imageInline: false, name: "akioni",},
    "76561197997214937": { twitterId: "ContiNUE", image: "", imageInline: false, name: "taka193b",},
    "76561198007465074": { twitterId: "ContiNUE", image: "", imageInline: false, name: "Thx",},
    "76561198158377566": { twitterId: "ContiNUE", image: "", imageInline: false, name: "balloon",},
    "76561198154585509": { twitterId: "ContiNUE", image: "", imageInline: false, name: "KuuKai",},
    "76561198255238179": { twitterId: "ContiNUE", image: "", imageInline: false, name: "flax",},
    "76561198120201417": { twitterId: "Cardinal", image: "", imageInline: false, name: "タゲ取りの翁",},
    "76561198262606794": { twitterId: "Cardinal", image: "", imageInline: false, name: "Nyan Nyan Angel",},
    "76561198119883973": { twitterId: "Cardinal", image: "", imageInline: false, name: "papeppu",},
    "76561198243350028": { twitterId: "Cardinal", image: "", imageInline: false, name: "Getra",},
    "76561198168297630": { twitterId: "Cardinal", image: "", imageInline: false, name: "okawariAJ",},
    "76561198095307971": { twitterId: "V3Esports", image: "", imageInline: false, name: "MomiDi",},
    "76561198119746722": { twitterId: "V3Esports", image: "", imageInline: false, name: "neko",},
    "76561198239305608": { twitterId: "V3Esports", image: "", imageInline: false, name: "to0much",},
    "76561198045836305": { twitterId: "V3Esports", image: "", imageInline: false, name: "esko",},
    "76561198116262180": { twitterId: "V3Esports", image: "", imageInline: false, name: "Serratos",},
    "76561198184829885": { twitterId: "侘寂", image: "", imageInline: false, name: "tounyu",},
    "76561198121372575": { twitterId: "侘寂", image: "", imageInline: false, name: "Sakura",},
    "76561198186248367": { twitterId: "侘寂", image: "", imageInline: false, name: "Rysk",},
    "76561198018616887": { twitterId: "侘寂", image: "", imageInline: false, name: "shin",},
    "76561198158595913": { twitterId: "侘寂", image: "", imageInline: false, name: "pla1n",},
    "76561198820048898": { twitterId: "outlaws", image: "", imageInline: false, name: "zanka",},
    "76561198148731720": { twitterId: "outlaws", image: "", imageInline: false, name: "k4ren",},
    "76561198398165397": { twitterId: "outlaws", image: "", imageInline: false, name: "farine",},
    "76561198876486403": { twitterId: "outlaws", image: "", imageInline: false, name: "Vanille",},
    "76561198799115441": { twitterId: "Leaque大阪", image: "", imageInline: false, name: "fuki6",},
    "76561198171515686": { twitterId: "Leaque大阪", image: "", imageInline: false, name: "odakun",},
    "76561198035400056": { twitterId: "Leaque大阪", image: "", imageInline: false, name: "P1kachu",},
    "76561198032635937": { twitterId: "Leaque大阪", image: "", imageInline: false, name: "ビリーくん",},
    "76561198026927895": { twitterId: "Leaque大阪", image: "", imageInline: false, name: "QK",},
    "76561198068389341": { twitterId: "Leaque大阪", image: "", imageInline: false, name: "Guttei",},
    "76561198280839929": { twitterId: "Leaque大阪", image: "", imageInline: false, name: "tktbjp",},
    "76561198172467199": { twitterId: "格が違う", image: "", imageInline: false, name: "Bashi",},
    "76561198247070348": { twitterId: "格が違う", image: "", imageInline: false, name: "The rock",},
    "76561198136381834": { twitterId: "格が違う", image: "", imageInline: false, name: "ab",},
    "76561198210464431": { twitterId: "格が違う", image: "", imageInline: false, name: "mutsu",},
    "76561197988409977": { twitterId: "格が違う", image: "", imageInline: false, name: "RAluS",},
    "76561198223409096": { twitterId: "格が違う", image: "", imageInline: false, name: "2525hunter",},
    "76561198410054406": { twitterId: "格が違う", image: "", imageInline: false, name: "riba",},
    "76561198143873805": { twitterId: "即席", image: "", imageInline: false, name: "kreamer",},
    "76561197993557574": { twitterId: "即席", image: "", imageInline: false, name: "shoushi",},
    "76561198063411174": { twitterId: "即席", image: "", imageInline: false, name: "放飼",},
    "76561198034607566": { twitterId: "即席", image: "", imageInline: false, name: "YATT3",},
    "76561198116105574": { twitterId: "即席", image: "", imageInline: false, name: "Peasy+",},
    "76561198069907558": { twitterId: "即席", image: "", imageInline: false, name: "cchhaarr",},
    "76561197996146503": { twitterId: "5Vibora", image: "", imageInline: false, name: "bobusyo",},
    "76561198190273598": { twitterId: "5Vibora", image: "", imageInline: false, name: "Eigorian",},
    "76561198187404227": { twitterId: "5Vibora", image: "", imageInline: false, name: "yuki",},
    "76561198193493617": { twitterId: "5Vibora", image: "", imageInline: false, name: "Gab'u'",},
    "76561198189091185": { twitterId: "5Vibora", image: "", imageInline: false, name: "E^q^Le-A-wp",},
    "76561198826258503": { twitterId: "5Vibora", image: "", imageInline: false, name: "kasa",},
};
