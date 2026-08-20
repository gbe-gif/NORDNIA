const fs = require('fs');

const koPath = './src/locales/ko.json';
const enPath = './src/locales/en.json';
const jaPath = './src/locales/ja.json';

const ko = JSON.parse(fs.readFileSync(koPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ja = JSON.parse(fs.readFileSync(jaPath, 'utf8'));

// Common additions
ko.common.readMore = "자세히 보기";
ko.common.collapse = "접기";
ko.common.feature = "특징";
ko.common.ability = "능력";

en.common.readMore = "Read more";
en.common.collapse = "Collapse";
en.common.feature = "Features";
en.common.ability = "Abilities";

ja.common.readMore = "詳細を見る";
ja.common.collapse = "閉じる";
ja.common.feature = "特徴";
ja.common.ability = "能力";

// Vaneris children
ko.vaneris.characters.push(
  {
    "name": "카지미르 바네리스",
    "fullName": "Kazimir Alexei Vaneris",
    "title": "차남",
    "keyword": "반항심, 천재성",
    "ability": "얼음 마법 (상급)",
    "details": [
      "차갑고 날카로운 인상의 미남.",
      "가문의 엄격한 통제에 반항하는 삐딱한 태도.",
      "형 레오니트와 비교당하는 것에 염증을 느낌.",
      "천재적인 마법적 재능을 지녔으나 노력하지 않음.",
      "속을 알 수 없는 미소로 상대의 약점을 찌르는 화법.",
      "은밀히 금지된 고대 마법에 손을 대고 있다는 소문."
    ]
  },
  {
    "name": "잉그리드 바네리스",
    "fullName": "Ingrid Elena Vaneris",
    "title": "장녀",
    "keyword": "냉혹함, 실리주의",
    "ability": "결계 마법 (최상급)",
    "details": [
      "감정을 배제한 서늘한 눈빛의 소유자.",
      "철저한 실리주의자로 가문의 이익을 최우선시함.",
      "북부의 외교와 첩보망을 실질적으로 통괄.",
      "쓸데없는 감정 소모를 혐오하며 완벽을 추구.",
      "남부 에스바르드 가문을 가장 경계하고 혐오함.",
      "레오니트를 가주로 세우기 위해 물밑 작업 중."
    ]
  }
);
en.vaneris.characters.push(
  {
    "name": "Kazimir Vaneris",
    "fullName": "Kazimir Alexei Vaneris",
    "title": "Second Son",
    "keyword": "Rebellious, Genius",
    "ability": "Ice Magic (Advanced)",
    "details": [
      "A handsome man with a cold, sharp impression.",
      "A rebellious attitude towards the family's strict control.",
      "Sick of being compared to his brother, Leonid.",
      "Has genius-level magical talent but puts in no effort.",
      "Uses a mysterious smile and a conversational style that pokes at opponents' weaknesses.",
      "Rumored to be secretly dabbling in forbidden ancient magic."
    ]
  },
  {
    "name": "Ingrid Vaneris",
    "fullName": "Ingrid Elena Vaneris",
    "title": "Eldest Daughter",
    "keyword": "Ruthless, Pragmatism",
    "ability": "Barrier Magic (Master)",
    "details": [
      "Possesses a chilling gaze devoid of emotion.",
      "A thorough pragmatist who prioritizes the family's interests above all.",
      "Practically oversees the North's diplomacy and intelligence networks.",
      "Loathes unnecessary emotional expenditure and strives for perfection.",
      "Harbors the deepest caution and hatred toward the Southern Esvard family.",
      "Working behind the scenes to establish Leonid as the head."
    ]
  }
);
ja.vaneris.characters.push(
  {
    "name": "カジミール・ヴァネリス",
    "fullName": "Kazimir Alexei Vaneris",
    "title": "次男",
    "keyword": "反抗心、天才性",
    "ability": "氷魔法（上級）",
    "details": [
      "冷たく鋭い印象の美青年。",
      "家門の厳格な統制に反発するひねくれた態度。",
      "兄レオニトと比較されることにうんざりしている。",
      "天才的な魔法の才能を持つが努力しない。",
      "底知れぬ微笑みで相手の弱点を突く話法。",
      "密かに禁じられた古代魔法に手を出しているという噂。"
    ]
  },
  {
    "name": "イングリッド・ヴァネリス",
    "fullName": "Ingrid Elena Vaneris",
    "title": "長女",
    "keyword": "冷酷さ、実利主義",
    "ability": "結界魔法（最上級）",
    "details": [
      "感情を排した涼しげな眼差しの持ち主。",
      "家門の利益を最優先する徹底した実利主義者。",
      "北部の外交と諜報網を実質的に統括。",
      "無駄な感情の消耗を嫌悪し、完璧を追求。",
      "南部エスヴァルド家門を最も警戒し嫌悪している。",
      "レオニトを当主にするため水面下で工作活動中。"
    ]
  }
);

// Esvard children
ko.esvard.characters.push(
  {
    "name": "하콘 에스바르드",
    "fullName": "Håkon August Esvard",
    "title": "장남",
    "keyword": "우직함, 책임감",
    "ability": "소드 엑스퍼트 (최상급)",
    "details": [
      "거대한 체구와 압도적인 근력을 지닌 에스바르드의 차기 가주.",
      "어머니 아스트리트를 진심으로 존경하며, 가문의 명예를 위해 목숨을 걺.",
      "말수가 적고 행동으로 보여주는 우직한 성격.",
      "잔머리를 굴리는 자들을 혐오하며 정면 승부를 선호.",
      "뛰어난 검술 실력에 비해 마나 운용이 투박한 것이 콤플렉스.",
      "최근 국경 지대 마물 토벌전에서 큰 전공을 세움."
    ]
  },
  {
    "name": "에길 에스바르드",
    "fullName": "Egil Vidar Esvard",
    "title": "차남",
    "keyword": "승부욕, 인정욕구",
    "ability": "소드 엑스퍼트 (초급)",
    "details": [
      "날쌘 표범처럼 유연하고 빠른 몸놀림을 지닌 소년.",
      "천재적인 검술 재능을 지녔으나 성격이 급하고 다혈질.",
      "형 하콘에게 열등감을 느끼며 늘 이기려 듦.",
      "칭찬에 약하고 속이 뻔히 보이는 단순한 성격.",
      "가문의 전통인 무거운 대검보다 쌍검을 선호해 자주 꾸중을 들음.",
      "몰래 마도구를 수집하는 은밀한 취미가 있음."
    ]
  }
);
en.esvard.characters.push(
  {
    "name": "Håkon Esvard",
    "fullName": "Håkon August Esvard",
    "title": "Eldest Son",
    "keyword": "Steadfastness, Responsibility",
    "ability": "Sword Expert (Master)",
    "details": [
      "The next head of Esvard, possessing a massive physique and overwhelming muscular strength.",
      "Sincerely respects his mother Astrid and risks his life for the family's honor.",
      "A steadfast personality who speaks little and shows through action.",
      "Despises those who use cheap tricks and prefers head-on battles.",
      "Complex about his crude mana management compared to his outstanding swordsmanship.",
      "Recently made major achievements in the border monster subjugation campaign."
    ]
  },
  {
    "name": "Egil Esvard",
    "fullName": "Egil Vidar Esvard",
    "title": "Second Son",
    "keyword": "Competitiveness, Need for Recognition",
    "ability": "Sword Expert (Beginner)",
    "details": [
      "A boy with agile and fast movements like a nimble leopard.",
      "Possesses genius-level swordsmanship talent but is impatient and hot-tempered.",
      "Feels an inferiority complex toward his brother Håkon and always tries to win.",
      "A simple personality whose thoughts are transparent and who is weak to praise.",
      "Often scolded for preferring twin swords over the family's traditional heavy greatsword.",
      "Has a secret hobby of secretly collecting magic tools."
    ]
  }
);
ja.esvard.characters.push(
  {
    "name": "ホーコン・エスヴァルド",
    "fullName": "Håkon August Esvard",
    "title": "長男",
    "keyword": "実直さ、責任感",
    "ability": "ソードエキスパート（最上級）",
    "details": [
      "巨大な体躯と圧倒的な筋力を持つエスヴァルドの次期当主。",
      "母アストリッドを心から尊敬し、家門の誇りのために命を懸ける。",
      "口数が少なく行動で示す実直な性格。",
      "小細工を使う者を嫌悪し、真っ向勝負を好む。",
      "優れた剣術の腕前に比べ、マナの運用が粗削りなのがコンプレックス。",
      "最近、国境地帯の魔物討伐戦で大きな戦功を立てた。"
    ]
  },
  {
    "name": "エギル・エスヴァルド",
    "fullName": "Egil Vidar Esvard",
    "title": "次男",
    "keyword": "負けず嫌い、承認欲求",
    "ability": "ソードエキスパート（初級）",
    "details": [
      "素早い豹のように柔軟で俊敏な身のこなしを持つ少年。",
      "天才的な剣術の才能を持つが、気が短く血の気が多い。",
      "兄ホーコンに劣等感を抱き、常に勝とうとする。",
      "褒め言葉に弱く、本心が丸見えの単純な性格。",
      "家門の伝統である重い大剣よりも双剣を好み、よく叱られる。",
      "こっそり魔道具を収集するという密かな趣味がある。"
    ]
  }
);

// Family lineage texts
ko.esvard.familyLineage = "불꽃·전쟁·폭풍의 신성";
en.esvard.familyLineage = "Divine nature of Flame, War, and Storm";
ja.esvard.familyLineage = "炎・戦争・嵐の神性";

ko.vaneris.familyLineage = "얼음·심연·지혜의 신성";
en.vaneris.familyLineage = "Divine nature of Ice, Abyss, and Wisdom";
ja.vaneris.familyLineage = "氷・深淵・知恵の神性";

ko.nordnia.familyLineage = "정령왕들과의 계약. 대대로 높은 정령 감응도.";
en.nordnia.familyLineage = "Contract with the Spirit Kings. High spirit sensitivity passed down through generations.";
ja.nordnia.familyLineage = "精霊王たちとの契約。代々高い精霊感応度。";


fs.writeFileSync(koPath, JSON.stringify(ko, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(jaPath, JSON.stringify(ja, null, 2));

console.log("Updated locales.");
