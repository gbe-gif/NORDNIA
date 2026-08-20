const fs = require('fs');

const koPath = './src/locales/ko.json';
const enPath = './src/locales/en.json';
const jaPath = './src/locales/ja.json';

const ko = JSON.parse(fs.readFileSync(koPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ja = JSON.parse(fs.readFileSync(jaPath, 'utf8'));

// Nordnia capital desc
ko.nordnia.capitalDesc = "제국의 심장. 화려한 대리석과 첨단 시설이 조화를 이루는 거대 도시.";
en.nordnia.capitalDesc = "The heart of the Empire. A massive city where splendid marble and cutting-edge facilities harmonize.";
ja.nordnia.capitalDesc = "帝国の心臓。華麗な大理石と先端施設が調和する巨大都市。";

ko.nordnia.characters[0].imageCaption = "* RP중 라우리츠의 이미지는 미출력됨";
en.nordnia.characters[0].imageCaption = "* Lauritz's image is not output during RP";
ja.nordnia.characters[0].imageCaption = "* RP中ラウリッツの画像は出力されません";

// Nordnia additional locations
ko.nordnia.locations.push(
  {
    title: "연구지구",
    subtitle: "학술 중심지",
    summary: "각 분야 학술기관과 연구시설 밀집 구역.",
    details: "거대 서점과 만물상회가 즐비하며, 제국의 수많은 학자와 연구원들이 거주하고 교류하는 지식의 장입니다."
  },
  {
    title: "쿤스트할",
    subtitle: "예술과 사교",
    summary: "미술관, 대극장, 사교클럽 발달.",
    details: "귀족 사교의 중심. 미술관, 대극장, 사교클럽, 티룸이 발달해 있습니다."
  },
  {
    title: "글란체",
    subtitle: "상업과 유행",
    summary: "명품 상점가 및 디저트 맛집 밀집 구역.",
    details: "쿤스트할을 지나면 나타나는 상점가입니다. 고급 의류, 장신구, 유명 디저트 맛집이 밀집해 있어 유행을 선도합니다."
  },
  {
    title: "대성당",
    subtitle: "종교 및 사교",
    summary: "매달 30일 귀족 정기기도회 개최 (필참).",
    details: "신성한 종교 시설인 동시에 귀족들의 주요 교류 장소입니다. 최근 연애운을 점치는 성물이 유명해져 젊은 귀족 여성들에게 큰 인기를 끌고 있습니다."
  }
);

en.nordnia.locations.push(
  {
    title: "Research District",
    subtitle: "Academic Center",
    summary: "A dense area of academic institutions and research facilities.",
    details: "Lined with massive bookstores and general stores, it is a place of knowledge where countless scholars and researchers of the Empire live and interact."
  },
  {
    title: "Kunsthal",
    subtitle: "Art and Socializing",
    summary: "Developed with art galleries, grand theaters, and social clubs.",
    details: "The center of aristocratic socializing. Art galleries, grand theaters, social clubs, and tearooms are highly developed."
  },
  {
    title: "Glanz",
    subtitle: "Commerce and Trends",
    summary: "A dense area of luxury shopping streets and famous dessert shops.",
    details: "The shopping street that appears past Kunsthal. It leads trends with a high concentration of high-end clothing, accessories, and famous dessert spots."
  },
  {
    title: "Cathedral",
    subtitle: "Religion and Socializing",
    summary: "Regular aristocratic prayer meetings held on the 30th of every month (mandatory).",
    details: "It is both a sacred religious facility and a major meeting place for nobles. Recently, a holy relic that tells fortunes in love has become famous and is very popular among young noblewomen."
  }
);

ja.nordnia.locations.push(
  {
    title: "研究地区",
    subtitle: "学術の中心地",
    summary: "各分野の学術機関や研究施設が密集する区域。",
    details: "巨大な書店や万屋が立ち並び、帝国の数多くの学者や研究者が居住し交流する知識の場です。"
  },
  {
    title: "クンストハル",
    subtitle: "芸術と社交",
    summary: "美術館、大劇場、社交クラブが発達。",
    details: "貴族の社交の中心。美術館、大劇場、社交クラブ、ティールームが発達しています。"
  },
  {
    title: "グランツ",
    subtitle: "商業と流行",
    summary: "高級商店街およびデザートの名店が密集する区域。",
    details: "クンストハルを過ぎると現れる商店街です。高級衣料品、装飾品、有名なデザート店が密集しており、流行をリードしています。"
  },
  {
    title: "大聖堂",
    subtitle: "宗教および社交",
    summary: "毎月30日に貴族の定期祈祷会が開催（参加必須）。",
    details: "神聖な宗教施設であると同時に、貴族たちの主要な交流の場です。最近、恋愛運を占う聖物が有名になり、若い貴族の女性たちに大人気です。"
  }
);

ko.nordnia.east = {
  title: "제국 동부",
  subtitle: "곡창과 과수원",
  desc: "제국 최대의 곡창지대. 넓은 과수원이 발달하여 풍요로운 농업 생산량을 자랑합니다.",
  cityLabel: "대표 도시: 브레가",
  cityDesc: "동부의 중심 도시. 질 좋은 와인과 증류주 생산으로 유명합니다."
};
en.nordnia.east = {
  title: "Eastern Empire",
  subtitle: "Granaries and Orchards",
  desc: "The largest granary of the Empire. Boasts abundant agricultural production with developed large orchards.",
  cityLabel: "Representative City: Brega",
  cityDesc: "The central city of the East. Famous for producing high-quality wine and distilled spirits."
};
ja.nordnia.east = {
  title: "帝国東部",
  subtitle: "穀倉と果樹園",
  desc: "帝国最大の穀倉地帯。広い果樹園が発達し、豊かな農業生産量を誇ります。",
  cityLabel: "代表都市：ブレガ",
  cityDesc: "東部の中心都市。良質なワインと蒸留酒の生産で有名です。"
};

ko.nordnia.west = {
  title: "제국 서부",
  subtitle: "무역과 해안",
  desc: "대양과 접한 광대한 해안지대. 외부 문물 유입과 해양 교역의 중심입니다.",
  cityLabel: "대표 도시: 하브릭",
  cityDesc: "서부 최대의 무역항. 마물 부산물과 진귀한 향신료 무역으로 막대한 부를 창출합니다."
};
en.nordnia.west = {
  title: "Western Empire",
  subtitle: "Trade and Coast",
  desc: "A vast coastal area facing the ocean. The center of external cultural influx and maritime trade.",
  cityLabel: "Representative City: Havric",
  cityDesc: "The largest trading port in the West. Generates immense wealth through the trade of monster byproducts and rare spices."
};
ja.nordnia.west = {
  title: "帝国西部",
  subtitle: "貿易と海岸",
  desc: "大洋に面した広大な海岸地帯。外部の文物の流入と海洋交易の中心です。",
  cityLabel: "代表都市：ハブリック",
  cityDesc: "西部最大の貿易港。魔物の副産物や珍しい香辛料の貿易で莫大な富を生み出します。"
};


fs.writeFileSync(koPath, JSON.stringify(ko, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(jaPath, JSON.stringify(ja, null, 2));

console.log("Updated Nordnia locales.");
