const fs = require('fs');

const koPath = './src/locales/ko.json';
const enPath = './src/locales/en.json';
const jaPath = './src/locales/ja.json';

const ko = JSON.parse(fs.readFileSync(koPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ja = JSON.parse(fs.readFileSync(jaPath, 'utf8'));

ko.common.divineLineage = "신성혈통";
en.common.divineLineage = "Divine Lineage";
ja.common.divineLineage = "神聖血統";

fs.writeFileSync(koPath, JSON.stringify(ko, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(jaPath, JSON.stringify(ja, null, 2));
console.log("Updated divine lineage");
