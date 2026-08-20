const fs = require('fs');

const koPath = './src/locales/ko.json';
const enPath = './src/locales/en.json';
const jaPath = './src/locales/ja.json';

const ko = JSON.parse(fs.readFileSync(koPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ja = JSON.parse(fs.readFileSync(jaPath, 'utf8'));

ko.vaneris.characters = [
  ko.vaneris.characters[0],
  {
    name: "카지미르 바네리스",
    fullName: "Kazimir Bolesław Vaneris",
    title: "소공작 / 차기 가주",
    keyword: "지적 우월감, 예의바름",
    ability: "7서클 마법사",
    details: [
      "어린 시절부터 체계적인 교육을 받은 마법 수재.",
      "지식과 예법을 중시하며 기준에 어긋나는 행동에는 까다롭게 반응.",
      "타인을 '우민'이라 부르는 데 거리낌이 없을 정도로 지적 우월감이 강함.",
      "레이디에게는 예의 바른 신사지만 남성에게는 한층 엄격한 태도 유지.",
      "에스바르드 소공작 하콘을 라이벌로 여기며, 자신이 검술 외 모든 면에서 우월하다고 생각.",
      "세간에서 하콘과 비슷한 위치로 평가되는 것에 자존심 상해함.",
      "단것을 매우 좋아하며 핏을 위해 꾸준히 운동. 귀신을 무서워하는 약점 보유.",
      "<strong>향:</strong> 네롤리와 은은한 백합이 섞인 향."
    ]
  },
  {
    name: "잉그리드 바네리스",
    fullName: "Ingrid Albina Vaneris",
    title: "공녀",
    keyword: "자존심, 솔직함",
    ability: "3서클 마법사",
    details: [
      "자신이 세상의 중심이라고 믿을 만큼 자존심 강하고 당당한 소녀.",
      "칭찬에 약하며 기분이나 마음에 들지 않는 상황을 표정에 다 드러냄.",
      "오빠의 보호와 엄격한 교육으로 숙녀다운 대접에 유난히 민감.",
      "에스바르드의 차남 에길을 야생마 취급하며 극도로 싫어함.",
      "에길을 상대로 자신의 우월함을 증명하는 일에 집착.",
      "로맨스 소설을 즐겨 읽으며 남몰래 황태자를 동경 중.",
      "다리가 많은 벌레를 극도로 싫어하며 싸구려 원단에 피부가 반응하는 체질.",
      "<strong>향:</strong> 상큼한 레몬과 달콤한 자두가 어우러진 향."
    ]
  }
];

en.vaneris.characters = [
  en.vaneris.characters[0],
  {
    name: "Kazimir Vaneris",
    fullName: "Kazimir Bolesław Vaneris",
    title: "Young Duke / Next Head",
    keyword: "Intellectual Superiority, Politeness",
    ability: "7-Circle Mage",
    details: [
      "A magic prodigy who received systematic education since childhood.",
      "Values knowledge and etiquette, reacting strictly to behavior that falls below his standards.",
      "Has a strong sense of intellectual superiority, calling others 'ignorant masses' without hesitation.",
      "Maintains a polite gentlemanly demeanor towards ladies but is much stricter towards men.",
      "Considers Esvard's young duke Hakon as his rival and believes himself superior in all aspects except swordsmanship.",
      "His pride is hurt when the public evaluates him on a similar level to Hakon.",
      "Loves sweets very much and exercises consistently to maintain his physique. Has a weakness of being afraid of ghosts.",
      "<strong>Scent:</strong> A blend of neroli and subtle lily."
    ]
  },
  {
    name: "Ingrid Vaneris",
    fullName: "Ingrid Albina Vaneris",
    title: "Lady",
    keyword: "Pride, Honesty",
    ability: "3-Circle Mage",
    details: [
      "A proud and confident girl who believes she is the center of the world.",
      "Weak to praise and clearly shows her mood or dissatisfaction on her face.",
      "Particularly sensitive to being treated as a lady due to her brother's protection and strict education.",
      "Extremely dislikes Esvard's second son Egil, treating him like a wild horse.",
      "Obsessed with proving her superiority against Egil.",
      "Enjoys reading romance novels and secretly admires the Crown Prince.",
      "Extremely hates bugs with many legs and has a constitution that reacts poorly to cheap fabrics.",
      "<strong>Scent:</strong> A refreshing blend of lemon and sweet plum."
    ]
  }
];

ja.vaneris.characters = [
  ja.vaneris.characters[0],
  {
    name: "カジミール・ヴァネリス",
    fullName: "Kazimir Bolesław Vaneris",
    title: "小公爵 / 次期当主",
    keyword: "知的優越感、礼儀正しさ",
    ability: "7サークル魔法使い",
    details: [
      "幼い頃から体系的な教育を受けた魔法の秀才。",
      "知識と礼儀を重んじ、基準から外れた行動には厳しく反応する。",
      "他人を「愚民」と呼ぶことに抵抗がないほど知的優越感が強い。",
      "淑女には礼儀正しい紳士だが、男性には一層厳しい態度を保つ。",
      "エスヴァルドの小公爵ホーコンをライバル視し、剣術以外すべての面で自分が優れていると思っている。",
      "世間からホーコンと同格と評価されることにプライドを傷つけられている。",
      "甘いものが大好きで、体型維持のために運動を欠かさない。お化けが怖いという弱点がある。",
      "<strong>香り:</strong> ネロリとほのかなユリが混ざった香り。"
    ]
  },
  {
    name: "イングリッド・ヴァネリス",
    fullName: "Ingrid Albina Vaneris",
    title: "公女",
    keyword: "プライド、素直さ",
    ability: "3サークル魔法使い",
    details: [
      "自分が世界の中心だと信じて疑わないほどプライドが高く堂々とした少女。",
      "褒め言葉に弱く、機嫌や気に入らない状況をすべて顔に出す。",
      "兄の保護と厳しい教育により、淑女として扱われることに人一倍敏感。",
      "エスヴァルドの次男エギルを野生馬扱いし、極度に嫌悪している。",
      "エギルを相手に自分の優越性を証明することに執着している。",
      "ロマンス小説を読むのが好きで、密かに皇太子に憧れている。",
      "足の多い虫を極度に嫌悪し、安物の生地には肌が荒れる体質。",
      "<strong>香り:</strong> 爽やかなレモンと甘いプラムが調和した香り。"
    ]
  }
];

ko.esvard.characters = [
  ko.esvard.characters[0],
  {
    name: "하콘 에스바르드",
    fullName: "Håkon August Esvard",
    title: "소공작 / 차기 가주",
    keyword: "완벽주의, 가족애",
    ability: "소드 엑스퍼트 상급",
    details: [
      "교양·예법·체력·검술을 두루 갖춘 뛰어난 후계자.",
      "정정당당한 승부의 결과는 상대에게도 쿨하게 인정.",
      "사춘기의 흔적이 남아 있어 자신의 영역을 건드리는 상황에 예민.",
      "바네리스 소공작 카지미르와 치열한 경쟁 관계.",
      "상대가 가족을 건드리는 순간 단호하고 냉정하게 대응.",
      "마물 수집과 미술관 관람이라는 차분한 취미 보유.",
      "<strong>향:</strong> 진저를 스친 듯한 차분한 시더우드 향."
    ]
  },
  {
    name: "에길 에스바르드",
    fullName: "Egil Vidar Esvard",
    title: "차남",
    keyword: "승부욕, 인정욕구",
    ability: "소드 비기너 최상급",
    details: [
      "검술에 있어서는 형 하콘을 뛰어넘는 천부적 감각을 지녔다는 평가.",
      "오러를 다루는 감각은 부족하나 반사신경과 속도로 커버.",
      "모든 관심은 형과 검술뿐이며, 복잡한 예법과 공부를 끔찍이 싫어함.",
      "도발에 매우 취약하며 감정이 솔직하게 얼굴에 다 드러나는 타입.",
      "바네리스의 잉그리드를 깐깐하고 재수 없다고 여기며 마주치면 항상 싸움.",
      "싸움을 싫어한다고 말하면서도 몸이 먼저 나가는 다혈질.",
      "가문의 상징인 흑표범과 교감하는 능력이 남다름.",
      "<strong>향:</strong> 비 온 뒤의 숲에서 나는 상쾌한 흙내음."
    ]
  }
];

en.esvard.characters = [
  en.esvard.characters[0],
  {
    name: "Håkon Esvard",
    fullName: "Håkon August Esvard",
    title: "Young Duke / Next Head",
    keyword: "Perfectionism, Family Love",
    ability: "Sword Expert (Advanced)",
    details: [
      "An outstanding heir well-versed in culture, etiquette, stamina, and swordsmanship.",
      "Coolly accepts the results of a fair fight, even acknowledging his opponent.",
      "Still shows traces of puberty and is sensitive when his boundaries are crossed.",
      "In a fierce rivalry with Vaneris's young duke Kazimir.",
      "Responds firmly and coldly the moment an opponent messes with his family.",
      "Has calm hobbies of collecting magic items and visiting art galleries.",
      "<strong>Scent:</strong> A calm cedarwood scent brushed with ginger."
    ]
  },
  {
    name: "Egil Esvard",
    fullName: "Egil Vidar Esvard",
    title: "Second Son",
    keyword: "Competitiveness, Need for Recognition",
    ability: "Sword Beginner (Master)",
    details: [
      "Evaluated as having an innate sense for swordsmanship that surpasses his brother Hakon.",
      "Lacks the sense to handle aura but covers it with reflexes and speed.",
      "All his interests are his brother and swordsmanship; terribly hates complicated etiquette and studying.",
      "Very vulnerable to provocation and a type whose emotions honestly show on his face.",
      "Considers Ingrid of Vaneris strict and unlucky, always fighting when they meet.",
      "A hot-tempered person whose body acts first even though he says he hates fighting.",
      "Has an exceptional ability to communicate with the black panther, the symbol of his family.",
      "<strong>Scent:</strong> A refreshing earthy scent from a forest after rain."
    ]
  }
];

ja.esvard.characters = [
  ja.esvard.characters[0],
  {
    name: "ホーコン・エスヴァルド",
    fullName: "Håkon August Esvard",
    title: "小公爵 / 次期当主",
    keyword: "完璧主義、家族愛",
    ability: "ソードエキスパート（上級）",
    details: [
      "教養・礼儀・体力・剣術を兼ね備えた優れた後継者。",
      "正々堂々とした勝負の結果は相手にもクールに認める。",
      "思春期の名残があり、自分の領域を侵される状況に敏感。",
      "ヴァネリスの小公爵カジミールとは熾烈なライバル関係。",
      "相手が家族に手を出した瞬間、断固として冷酷に対応する。",
      "魔道具収集と美術館巡りという落ち着いた趣味を持つ。",
      "<strong>香り:</strong> ジンジャーをかすめたような落ち着いたシダーウッドの香り。"
    ]
  },
  {
    name: "エギル・エスヴァルド",
    fullName: "Egil Vidar Esvard",
    title: "次男",
    keyword: "負けず嫌い、承認欲求",
    ability: "ソードビギナー（最上級）",
    details: [
      "剣術においては兄ホーコンを超える天賦の感覚を持つと評価される。",
      "オーラを扱う感覚は不足しているが、反射神経とスピードでカバーする。",
      "関心は兄と剣術のみであり、複雑な礼儀や勉強をひどく嫌う。",
      "挑発に非常に弱く、感情が素直に顔に出るタイプ。",
      "ヴァネリスのイングリッドを口うるさく嫌味なやつと思っており、会えばいつも喧嘩になる。",
      "喧嘩は嫌いだと言いながらも、体が先に動く血の気の多い性格。",
      "家門の象徴である黒豹と心を通わせる能力が人一倍強い。",
      "<strong>香り:</strong> 雨上がりの森の爽やかな土の匂い。"
    ]
  }
];

fs.writeFileSync(koPath, JSON.stringify(ko, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(jaPath, JSON.stringify(ja, null, 2));

console.log("Updated children locales.");
