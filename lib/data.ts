
export const siteConfig = {
  name: "Monochrome Cinderella",
  description: "Official Website of Monochrome Cinderella",
  url: "https://monochromecinderella.ryzm.jp",
  copyright: "© 2026 Monochrome Cinderella.",
  socials: {
    twitter: "https://x.com/mono_cinderella?s=21&t=ynadSPNDzvTbBqwB8y_BYQ",
    instagram: "https://www.instagram.com/monochromecinderella?igsh=MW5vZnFzampqYWlueQ==",
    youtube: "https://youtube.com/@monochromecinderella?si=Egge0zNKjwIVWZAq",
  },
};

export const navItems = [
  { name: "HOME", href: "/" },
  { name: "NEWS", href: "/#news" },
  { name: "LIVE", href: "/#live" },
  { name: "DISCOGRAPHY", href: "/#discography" },
  { name: "BIOGRAPHY", href: "/#biography" },
  { name: "MOVIE", href: "/#movie" },
  { name: "GOODS", href: "/#goods" },
  { name: "CONTACT", href: "/contact" },
];

export const heroContent = {
  slogan: "色付いたセカイで夢の続きを",
  subSlogan: "Continuing the dream in a colored world",
};

export const newsItems = [
  {
    id: "1",
    date: "2026/01/07",
    title: "【BURRN! 2026年2月号】Vo.良夢、Gt.Toshimitsu、Dr.Syunta INTERVIEW掲載！",
    link: "https://t.co/K5b1NTxXN8",
    category: "MAGAZINE",
    image: "https://ryzm.imgee.io/sites/898b01a8-6b2f-4863-9a81-f83872309ab0/images/2aa7546d-2843-46a2-9bcd-06da430e078e",
  },
  {
    id: "2",
    date: "2025/12/09",
    title: "【YOUNG GUITAR 2026年1月号】Gt. Mariya INTERVIEW掲載！",
    link: "https://youngguitar.jp/yg/yg-202601",
    category: "MAGAZINE",
    image: "https://ryzm.imgee.io/sites/898b01a8-6b2f-4863-9a81-f83872309ab0/images/9d80c62d-a6b5-4963-9616-1304a3003466",
  },
  {
    id: "3",
    date: "2025/11/18",
    title: "【激ロック】INTERVIEW掲載！",
    description: "Member：Vo. 良夢、Dr. Syunta Furuhashi / Interviewer：山口 哲生",
    link: "https://gekirock.com/interview/2025/11/monochrome_cinderella.php",
    category: "WEB",
    image: "https://ryzm.imgee.io/sites/898b01a8-6b2f-4863-9a81-f83872309ab0/images/ecbd4cd7-dcad-44b8-9dfe-709b3f5edf4e",
  },
];

export const liveItems = [
  {
    id: "1",
    date: "2026/02/08",
    day: "Sun",
    title: "LIVEHOLIC presents. \"恋せよ男子2026\" supported by 激ロック & Skream!",
    venue: "下北沢LIVEHOLIC / MOSAiC / 近松 / Flowers Loft / CLUB251 Music Bar LIVEHOLIC",
    link: "https://monochromecinderella.ryzm.jp/live/79eb5196-cd4a-4e07-a4d1-084b91a40201",
    image: "https://ryzm.imgee.io/sites/898b01a8-6b2f-4863-9a81-f83872309ab0/images/ccd2ed1a-a010-4a12-80e2-3f205d93a25a",
  },
];

export const discographyItems = [
  {
    id: "1",
    title: "Beyond The ANSEmble",
    type: "1st Full Album",
    releaseDate: "2025/11/19",
    price: "¥3,300 (Tax in)",
    catalogNo: "RETS-0044",
    tracks: [
      "01. Colorless",
      "02. フレネミーxフレネミー",
      "03. 残響Cradle",
      "04. Against The Grey Vortex",
      "05. RISE",
      "06. Preludio -城の門-",
      "07. Symphony Of Cinderella",
      "08. 坐 -sozolo-",
      "09. OUT YOUR SIDE",
      "10. Progress",
      "11. Revenger",
    ],
    image: "https://ryzm.imgee.io/sites/898b01a8-6b2f-4863-9a81-f83872309ab0/images/1be483b4-8ea5-4d2b-8e41-f6bcbf0f669e",
  },
  {
    id: "2",
    title: "Infinite Colors",
    type: "Single EP",
    releaseDate: "2024/04/21",
    price: "¥1,000",
    tracks: [
      "1. Colorless",
      "2. Revenger",
    ],
    image: "https://ryzm.imgee.io/sites/898b01a8-6b2f-4863-9a81-f83872309ab0/images/f7ae7492-4c06-453d-a217-d5719653a7ea",
  },
];

export const members = [
  {
    role: "Dr.",
    name: "Syunta Furuhashi",
    englishName: "Syunta",
    description: "Band Founder.",
    image: "/images/member_syunta.jpg",
    order: { desktop: 1, mobile: 4 },
  },
  {
    role: "Ba.",
    name: "Anna",
    englishName: "Anna",
    description: "激烈重低音。心の臓に響くアツいSoundとグルーヴ。",
    image: "/images/member_anna.jpg",
    order: { desktop: 2, mobile: 3 },
  },
  {
    role: "Vo.",
    name: "良夢",
    englishName: "Ramu",
    description: "ex. sylph emew",
    image: "/images/member_ramu.jpg",
    order: { desktop: 3, mobile: 1 },
  },
  {
    role: "Gt.",
    name: "Mariya",
    englishName: "Mariya",
    description: "Lead Gt. 超絶技巧派。その音心は和製Nuno Bettencourtなり‼",
    image: "/images/member_mariya.jpg",
    order: { desktop: 4, mobile: 2 },
  },
  {
    role: "Gt.",
    name: "Toshimitsu",
    englishName: "Toshimitsu",
    description: "マルチにこなす空間の魔術師。",
    image: "/images/member_toshimitsu.jpg",
    order: { desktop: 5, mobile: 5 },
  },
];

export const bioText = {
  header: "Monochrome Cinderella",
  sub: "Emotive Melodic Metal",
  description: "『色付いたセカイで夢の続きを』\nエモーショナル・メロディックメタルバンド。\nDr.Syunta FuruhashiとVo.良夢(ex. sylph emew)が中心となり2024年3月結成。\n艶かしいGuitar Soundを巧みに操る超絶技巧派Lead Gt.Mariya その音心は和製Nuno Bettencourtなり‼刮目せよ‼\n心の臓に響くアツいSoundとグルーヴは、正にRobert TrujilloとRichard Bonaの悪魔的融合!!激烈重低音Ba.Anna‼\nマルチにこなす空間の魔術師Gt.Toshimitsu。5人から奏でる『激情の美旋律』でセカイを色づかせる…",
  bandImage: "https://ryzm.imgee.io/sites/898b01a8-6b2f-4863-9a81-f83872309ab0/images/827d123f-db25-4ccf-8dca-b2d6ea381e42",
};

export const goodsItems = [
  {
    id: "1",
    name: "アクリルスタンド",
    price: "各 ¥1,500",
    category: "OTHER",
    image: "https://ryzm.imgee.io/sites/898b01a8-6b2f-4863-9a81-f83872309ab0/images/270c681d-9ecc-4fcc-b466-f222e21996c9",
  },
  {
    id: "2",
    name: "1st full ALBUM『Beyond The ANSEmble』",
    price: "¥3,300",
    category: "CD",
    image: "https://ryzm.imgee.io/sites/898b01a8-6b2f-4863-9a81-f83872309ab0/images/1be483b4-8ea5-4d2b-8e41-f6bcbf0f669e",
  },
  {
    id: "3",
    name: "ORIGINAL STICKER",
    price: "¥500",
    category: "OTHER",
    image: "https://ryzm.imgee.io/sites/898b01a8-6b2f-4863-9a81-f83872309ab0/images/946423a9-751e-4ce2-882b-a17ba62eee99",
  },
  {
    id: "4",
    name: "ALBUM RELEASE 記念 T-SHIRT (BLACK)",
    price: "¥4,000",
    category: "T-SHIRTS",
    image: "https://ryzm.imgee.io/sites/898b01a8-6b2f-4863-9a81-f83872309ab0/images/4c432baf-6eea-4908-8123-1959e4bb65bd",
  },
];

export const movieItems = [
  {
    id: "1",
    title: "フレネミー×フレネミー",
    type: "Official Music Video",
    youtubeId: "E1q2N60QbP8",
  },
  {
    id: "2",
    title: "Colorless",
    type: "Official Live Clip",
    youtubeId: "TLlhFqoCq7Y",
  },
];
