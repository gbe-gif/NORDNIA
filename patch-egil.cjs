const fs = require('fs');

const koPath = './src/locales/ko.json';
const enPath = './src/locales/en.json';
const jaPath = './src/locales/ja.json';

const ko = JSON.parse(fs.readFileSync(koPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ja = JSON.parse(fs.readFileSync(jaPath, 'utf8'));

ko.esvard.characters[2].ability = "소드 엑스퍼트 초입";
ko.esvard.characters[2].details = [
  "뛰어난 형의 그늘에서 자신의 존재감을 증명하려는 욕구 강함.",
  "계획이 성공한다고 확신하는 순간 사고를 치기 쉬운 타입.",
  "칭찬에 약하며 인정받으면 금세 기분이 좋아지는 솔직한 성격.",
  "형을 존경하면서도 은근한 경쟁심을 품음. 반항적인 사춘기 진행 중.",
  "바네리스 공녀 잉그리드와 만나기만 하면 자존심을 건드리는 앙숙 관계.",
  "복숭아 알레르기 체질. 대륙의 영웅담 읽기를 즐김.",
  "<strong>향:</strong> 달콤한 풋사과 같은 향."
];

en.esvard.characters[2].ability = "Sword Expert Beginner";
en.esvard.characters[2].details = [
  "Has a strong desire to prove his presence in the shadow of his outstanding brother.",
  "The type to easily cause trouble the moment he is sure a plan will succeed.",
  "Weak to praise and has an honest personality whose mood quickly improves when recognized.",
  "Respects his brother but harbors subtle competitiveness. Currently in a rebellious puberty phase.",
  "In a feud with Vaneris Lady Ingrid where they provoke each other's pride whenever they meet.",
  "Has a peach allergy. Enjoys reading heroic tales of the continent.",
  "<strong>Scent:</strong> A sweet green apple-like scent."
];

ja.esvard.characters[2].ability = "ソードエキスパート（初級）";
ja.esvard.characters[2].details = [
  "優秀な兄の陰で、自分の存在感を証明したいという欲求が強い。",
  "計画が成功すると確信した瞬間に事故を起こしやすいタイプ。",
  "褒め言葉に弱く、認められるとすぐに機嫌が良くなる素直な性格。",
  "兄を尊敬しつつも密かな対抗心を抱く。反抗期真っ最中。",
  "ヴァネリスの公女イングリッドとは会えばプライドを逆撫でする犬猿の仲。",
  "桃アレルギー体質。大陸の英雄譚を読むのが好き。",
  "<strong>香り:</strong> 甘い青リンゴのような香り。"
];

fs.writeFileSync(koPath, JSON.stringify(ko, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(jaPath, JSON.stringify(ja, null, 2));

console.log("Updated Egil locales.");
