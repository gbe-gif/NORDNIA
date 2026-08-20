const fs = require('fs');
const path = require('path');

const ko = {
  nav: {
    home: "HOME",
    vaneris: "VANERIS",
    nordnia: "NORDNIA",
    esvard: "ESVARD",
    archive: "OFFICIAL ARCHIVE",
    footer: "© 2026 Official Archive. All Records Preserved.",
    lang: "언어"
  },
  home: {
    title1: "가문 싸움에 세계가",
    title2: "개같이 멸망했습니다",
    subtitle: "\"라는 웹소설 세계관이 이제 내 현생이라고?!\"",
    explore: "탐험하기",
    regions: {
      vaneris: {
        name: "바네리스 공작령",
        desc: "북부의 한풍, 마정석과 마도공학의 성지"
      },
      nordnia: {
        name: "노르드니아 제국",
        desc: "대륙의 중심, 신성한 황실과 두 공작가의 중재자"
      },
      esvard: {
        name: "에스바르드 공작령",
        desc: "남부의 불꽃, 강인한 기사들과 군사력의 요람"
      }
    }
  },
  nordnia: {
    tag: "Central Empire",
    title: "노르드니아 제국",
    facts: {
      world: "세계관",
      worldDesc: "18세기 유럽풍 마법 세계",
      location: "위치",
      locationDesc: "대륙의 중심",
      feature: "특징",
      featureDesc: "마법·정령·오러의 실재"
    },
    desc: "대륙의 패자이자 세계의 중심. 마법과 정령, 오러가 실재하는 세계에서 황실과 두 공작가를 축으로 권력과 균형이 유지되는 거대한 제국입니다.",
    familyTitle: "황실",
    familyLineage: "태양·빛·생명의 신성",
    familyDesc: "태양과 빛의 권능을 물려받은 신성한 핏줄입니다. 강력한 무력이나 마법보다는 조화와 생명력을 중시하며, 두 공작가의 팽팽한 균형을 조율하고 제국 전체의 안정을 유지하는 구심점 역할을 합니다.",
    characters: [
      {
        name: "라우리츠 폰 노르드니아",
        fullName: "Lauritz von Nordnia",
        title: "제국 황태자",
        keyword: "여유, 다정함, 조율자",
        ability: "빛의 최상위 정령술사",
        details: [
          "황금빛 머리카락과 은빛 눈동자를 지닌 눈에 띄는 외모.",
          "빛의 정령왕과 계약한 강력한 정령술사.",
          "사람을 편안하게 만드는 다정하고 여유로운 태도.",
          "상대의 긴장을 풀어주는 능글맞은 농담에 능숙.",
          "은퇴 여행을 떠난 황제를 대신해 황실 실무를 총괄 중.",
          "겉보기와 달리 만성적인 피로를 달고 살아가는 상태.",
          "두 공작가의 갈등을 최측근에서 지켜보는 황실 핵심 인물."
        ]
      }
    ],
    locationsTitle: "황도 메디온",
    locationsDesc: "제국의 심장. 화려한 대리석과 첨단 시설이 조화를 이루는 거대 도시.",
    locations: [
      {
        title: "황궁",
        subtitle: "황실의 상징",
        summary: "대회의 개최지. 고대 문헌을 보존한 황립도서관 위치.",
        details: [
          "매주 월요일 대회의 개최. 두 공작가 가주 필참.",
          "황립도서관을 통해 희귀 서적 보존.",
          "도서관 후문이 연구지구와 연결됨."
        ]
      },
      {
        title: "카르디아 광장",
        subtitle: "만남의 장",
        summary: "황도의 중앙 광장. 계절별 대형 축제 개최.",
        details: "중앙정원, 대형 분수, 시계탑이 위치해 있습니다. 황도 시민들과 귀족들의 대표적인 휴식처이자 데이트 명소입니다."
      },
      {
        title: "녹턴 구역",
        subtitle: "뒷골목",
        summary: "치안이 불안정하나 맛집이 다수 존재하는 황도 외곽.",
        details: "황도 외곽에 위치하며 정보상과 암시장이 밀집해 있습니다. 치안이 불안정하지만 유명한 불량식품 맛집이 다수 존재합니다."
      },
      {
        title: "아르젠 숲",
        subtitle: "사냥터",
        summary: "황도 서북부 광대한 마물 사냥 구역.",
        details: "황도 서북부에 위치한 광대한 숲. 잦은 마물 출몰로 인해 기사단과 아카데미 생도들의 주요 실전 훈련장으로 사용됩니다."
      }
    ]
  },
  vaneris: {
    tag: "Northern Duchy",
    title: "바네리스 공작령",
    facts: {
      climate: "기후",
      climateDesc: "한랭 건조, 잦은 눈",
      location: "위치",
      locationDesc: "북부 설원 및 산맥 지대",
      foundation: "기반",
      foundationDesc: "마정석 광산, 만년설, 빙하"
    },
    desc: "북부의 차가운 눈보라 속에 우뚝 선 마도공학의 성지. 풍부한 마정석 자원을 바탕으로 제국의 마법과 학문 발전을 주도하는 차갑고도 지적인 지역입니다.",
    locationsTitle: "주요 지역",
    locations: [
      {
        title: "벨라노바",
        subtitle: "수도",
        desc: "북부 최대 도시. 바네리스의 첨단 마도공학이 집약된 눈부신 마도도시입니다."
      },
      {
        title: "즈나움",
        subtitle: "연구 도시",
        desc: "바네리스 산하 마도학술원. 마도공학과 각종 학술 연구의 중심지입니다."
      },
      {
        title: "벨고라",
        subtitle: "만년설 산맥",
        desc: "거대한 설산과 빙하. 스키 및 스노보드 관광이 발달한 북부 최고의 휴양지입니다."
      }
    ],
    familyTitle: "바네리스 공작가",
    familyLineage: "지혜·룬·별·마법의 신성",
    familyDesc: "대대로 대마법사를 배출해 온 마법 명가입니다. 높은 학구열과 지적 탐구심을 바탕으로 제국의 마도공학 발전을 견인하고 있습니다. 황실로부터 막대한 마도 연구비를 지원받습니다.",
    characters: [
      {
        name: "레오니트 바네리스",
        fullName: "Leonid Hartwig Vaneris",
        title: "바네리스 공작",
        keyword: "책임감, 지적 자부심",
        ability: "9서클 대마법사",
        details: [
          "마법과 지식에 대한 자부심이 대단하며 다양한 분야의 교양에 능통.",
          "가문과 자녀에 대한 책임감이 강한 듬직한 가장.",
          "겉으로는 무뚝뚝해 보이나 가족에게는 한없이 너그러운 '딸바보'.",
          "논리적이고 체계적인 사고를 선호.",
          "연구에 몰두할 때는 주변을 전혀 신경 쓰지 못하는 워커홀릭 기질 보유.",
          "라이벌인 에스바르드 공작을 '야만적인 곰'이라 부르며 무식하다고 깜.",
          "의외로 단것(특히 마카롱)을 매우 좋아하나 겉으로는 숨기려 노력함."
        ]
      }
    ],
    specialtiesTitle: "특산물 및 생태",
    specialties: [
      {
        title: "마정석",
        subtitle: "핵심 자원",
        summary: "바네리스 영지 전역에서 채굴되는 광물.",
        details: "북부 마도공학과 열원 마법진의 동력이 되는 핵심 자원. 바네리스의 막대한 부와 기술력의 원천입니다."
      },
      {
        title: "텀블루트 (Tumbleroot)",
        subtitle: "희귀 고산 마물",
        summary: "벨고라에 서식하는 오동통하고 둥근 형태의 특산 마물.",
        details: [
          "근합성 촉진과 원기 회복에 탁월한 효능.",
          "닭고기와 비슷한 뛰어난 풍미.",
          "뽑히는 순간 뿌리다리가 자라 도주 시도.",
          "달리기 시작하자마자 중심을 잃고 넘어져 구르는 귀여운 습성 보유."
        ]
      }
    ]
  },
  esvard: {
    tag: "Southern Duchy",
    title: "에스바르드 공작령",
    facts: {
      climate: "기후",
      climateDesc: "온화한 지중해성",
      location: "위치",
      locationDesc: "남부 평원 및 험준한 산맥",
      foundation: "기반",
      foundationDesc: "풍부한 일조량, 거대한 숲"
    },
    desc: "따스한 햇살과 드넓은 평원이 펼쳐진 남부의 방패. 검과 기사도의 정신이 살아 숨쉬는 곳으로, 강력한 기사단과 무력을 자랑하는 긍지 높은 지역입니다.",
    locationsTitle: "주요 지역",
    locations: [
      {
        title: "스칼드하임",
        subtitle: "수도",
        desc: "남부 최대의 요새 도시이자 공작령의 수도. 흔들리지 않는 국경 방어의 중심입니다."
      },
      {
        title: "칸타렐",
        subtitle: "대산림",
        desc: "완만한 구릉이 끊임없이 이어지는 거대한 남부 산림 지대입니다."
      }
    ],
    familyTitle: "에스바르드 공작가",
    familyLineage: "불꽃·전쟁·폭풍의 신성",
    familyDesc: "압도적인 무력을 바탕으로 외적을 막아내며 제국의 방패 역할을 수행합니다. 대대로 기사단과 군사력을 최우선으로 육성해 왔으며, 검술과 육체적 강인함을 숭상합니다.",
    characters: [
      {
        name: "아스트리트 에스바르드",
        fullName: "Astrid Sigrún Esvard",
        title: "에스바르드 공작",
        keyword: "호탕함, 명예 중시",
        ability: "그랜드 소드마스터",
        details: [
          "대대로 소드마스터를 배출한 가문의 명예와 전통을 무엇보다 중시.",
          "평소에는 품위와 우아함을 잃지 않으나, 선을 넘는 순간 화산처럼 폭발.",
          "호탕하고 통이 크며 뒤끝은 짧은 편. 단, 가문의 명예를 모욕한 일은 오래 기억.",
          "고상한 귀족 어휘로 살벌한 계책을 태연하게 제안하는 독특한 화법 구사.",
          "현학적인 이론보다 직접 부딪혀 얻은 경험과 실력을 신뢰.",
          "라이벌인 레오니트의 실력은 인정하나 인간적으로는 탐탁지 않게 여김.",
          "거대한 마물을 직접 사냥하는 의외의 취미 보유."
        ]
      }
    ],
    specialtiesTitle: "특산물 및 생태",
    specialties: [
      {
        title: "남부 종마 및 육류",
        subtitle: "주력 산업",
        summary: "최고급 말 사육 및 목축업, 경마 산업 발달.",
        details: "드넓은 평원과 목초지를 활용한 목축업이 크게 발달했습니다. 기병대용 군마뿐 아니라 경마 산업을 주도하고 있으며, 질 좋은 육류를 제국 전역에 공급합니다."
      },
      {
        title: "미트캡 (Meatcap)",
        subtitle: "희귀 버섯 마물",
        summary: "칸타렐 대산림에만 서식하는 이동형 버섯 마물.",
        details: [
          "버섯 갓 아래 얇은 균근 다리가 달려 자유롭게 이동.",
          "성체는 닭 정도의 크기.",
          "깊고 진한 소고기 풍미가 일품.",
          "섭취 시 마력 회복과 집중력 향상에 탁월한 효과."
        ]
      }
    ]
  },
  common: {
    age: "세",
    gender: "성별",
    height: "신장",
    mbti: "성향",
    birthday: "생일",
    male: "남성",
    female: "여성",
    nextRegion: "다른 지역 탐색하기",
    nav_home: "HOME",
    nav_vaneris: "VANERIS",
    nav_nordnia: "NORDNIA",
    nav_esvard: "ESVARD"
  }
};

const en = {
  nav: {
    home: "HOME",
    vaneris: "VANERIS",
    nordnia: "NORDNIA",
    esvard: "ESVARD",
    archive: "OFFICIAL ARCHIVE",
    footer: "© 2026 Official Archive. All Records Preserved.",
    lang: "Language"
  },
  home: {
    title1: "The World Was Destroyed",
    title2: "By A Family Feud",
    subtitle: "\"Wait, this web novel world is now my reality?!\"",
    explore: "EXPLORE",
    regions: {
      vaneris: {
        name: "Duchy of Vaneris",
        desc: "The northern chill, sanctuary of mana stones and magitech."
      },
      nordnia: {
        name: "Nordnia Empire",
        desc: "The center of the continent, the sacred imperial family."
      },
      esvard: {
        name: "Duchy of Esvard",
        desc: "The southern flame, cradle of strong knights and military might."
      }
    }
  },
  nordnia: {
    tag: "Central Empire",
    title: "Nordnia Empire",
    facts: {
      world: "Setting",
      worldDesc: "18th-century European magical world",
      location: "Location",
      locationDesc: "Center of the continent",
      feature: "Features",
      featureDesc: "Existence of magic, spirits, and aura"
    },
    desc: "The hegemon of the continent and the center of the world. A massive empire where power and balance are maintained by the imperial family and the two duchies.",
    familyTitle: "The Imperial Family",
    familyLineage: "Divine blood of Sun, Light, and Life",
    familyDesc: "A sacred bloodline inheriting the powers of the sun and light. Valuing harmony and vitality over martial might, they act as the mediator between the two duchies.",
    characters: [
      {
        name: "Lauritz von Nordnia",
        fullName: "Lauritz von Nordnia",
        title: "Crown Prince",
        keyword: "Relaxed, Kind, Mediator",
        ability: "Supreme Light Elementalist",
        details: [
          "Striking appearance with golden hair and silver eyes.",
          "A powerful elementalist contracted with the Spirit King of Light.",
          "Friendly and relaxed demeanor that makes people comfortable.",
          "Skilled at making slick jokes to ease tension.",
          "Managing imperial affairs in place of the retired Emperor.",
          "Suffering from chronic fatigue despite his appearance.",
          "A key figure watching the conflict between the duchies up close."
        ]
      }
    ],
    locationsTitle: "Imperial Capital Medion",
    locationsDesc: "The heart of the empire. A megacity where splendid marble and cutting-edge facilities harmonize.",
    locations: [
      {
        title: "Imperial Palace",
        subtitle: "Symbol of the Empire",
        summary: "Venue for the grand council and the Imperial Library.",
        details: [
          "Weekly grand council every Monday. Heads of the two duchies must attend.",
          "Preserves rare books in the Imperial Library.",
          "The library's back door connects to the research district."
        ]
      },
      {
        title: "Kardia Square",
        subtitle: "Meeting Place",
        summary: "The central square of the capital. Hosts seasonal grand festivals.",
        details: "Features a central garden, a large fountain, and a clock tower. A popular resting place and date spot."
      },
      {
        title: "Nocturne District",
        subtitle: "Back Alleys",
        summary: "Unstable security but home to many famous eateries.",
        details: "Located on the outskirts. Dense with information brokers and black markets. Famous for its junk food eateries."
      },
      {
        title: "Argen Forest",
        subtitle: "Hunting Ground",
        summary: "Vast monster hunting area in the northwest.",
        details: "A vast forest in the northwest. Frequently used as a combat training ground for knights and academy cadets."
      }
    ]
  },
  vaneris: {
    tag: "Northern Duchy",
    title: "Duchy of Vaneris",
    facts: {
      climate: "Climate",
      climateDesc: "Cold & dry, frequent snow",
      location: "Location",
      locationDesc: "Northern snowfields and mountains",
      foundation: "Base",
      foundationDesc: "Mana stone mines, permafrost, glaciers"
    },
    desc: "A sanctuary of magitech standing tall in the northern blizzards. Driving the empire's magical and academic advancements with abundant mana stone resources.",
    locationsTitle: "Major Locations",
    locations: [
      {
        title: "Bellanova",
        subtitle: "Capital",
        desc: "The largest city in the north. A dazzling magical city showcasing cutting-edge magitech."
      },
      {
        title: "Znaum",
        subtitle: "Research City",
        desc: "The Vaneris Magic Academy. The center of magitech and various academic researches."
      },
      {
        title: "Belgora",
        subtitle: "Permafrost Mountains",
        desc: "Massive snowy mountains and glaciers. The north's premier resort for skiing and snowboarding."
      }
    ],
    familyTitle: "House of Vaneris",
    familyLineage: "Divine blood of Wisdom, Runes, Stars, and Magic",
    familyDesc: "A prestigious magic family producing archmages for generations. Driving the empire's magitech advancement with high intellectual curiosity.",
    characters: [
      {
        name: "Leonid Vaneris",
        fullName: "Leonid Hartwig Vaneris",
        title: "Duke of Vaneris",
        keyword: "Responsibility, Intellectual Pride",
        ability: "9th Circle Archmage",
        details: [
          "Great pride in magic and knowledge, well-versed in various fields.",
          "A reliable patriarch with a strong sense of responsibility.",
          "Appears gruff but is endlessly generous to his family.",
          "Prefers logical and systematic thinking.",
          "A workaholic who ignores his surroundings when immersed in research.",
          "Calls his rival, the Duke of Esvard, a 'barbaric bear'.",
          "Secretly loves sweets (especially macarons)."
        ]
      }
    ],
    specialtiesTitle: "Specialties & Ecology",
    specialties: [
      {
        title: "Mana Stones",
        subtitle: "Core Resource",
        summary: "Minerals mined throughout the Vaneris territory.",
        details: "The core resource powering northern magitech. The source of Vaneris's immense wealth and technological prowess."
      },
      {
        title: "Tumbleroot",
        subtitle: "Rare Alpine Monster",
        summary: "A plump and round specialty monster living in Belgora.",
        details: [
          "Excellent for muscle synthesis and stamina recovery.",
          "Outstanding flavor similar to chicken.",
          "Grows root-legs and attempts to flee the moment it's plucked.",
          "Has a cute habit of tripping and rolling as soon as it starts running."
        ]
      }
    ]
  },
  esvard: {
    tag: "Southern Duchy",
    title: "Duchy of Esvard",
    facts: {
      climate: "Climate",
      climateDesc: "Mild Mediterranean",
      location: "Location",
      locationDesc: "Southern plains and rugged mountains",
      foundation: "Base",
      foundationDesc: "Abundant sunlight, vast forests"
    },
    desc: "The shield of the south, where warm sunlight and vast plains unfold. A proud region boasting strong knights and military might.",
    locationsTitle: "Major Locations",
    locations: [
      {
        title: "Skaldheim",
        subtitle: "Capital",
        desc: "The largest fortress city in the south. The center of unshakeable border defense."
      },
      {
        title: "Cantarel",
        subtitle: "Great Forest",
        desc: "A massive southern forest area with endless gentle hills."
      }
    ],
    familyTitle: "House of Esvard",
    familyLineage: "Divine blood of Flame, War, and Storms",
    familyDesc: "Acting as the empire's shield by fending off external enemies with overwhelming martial prowess. Prioritizes military strength and swordsmanship.",
    characters: [
      {
        name: "Astrid Esvard",
        fullName: "Astrid Sigrún Esvard",
        title: "Duke of Esvard",
        keyword: "Boldness, Values Honor",
        ability: "Grand Swordmaster",
        details: [
          "Values the honor and traditions of her family above all else.",
          "Usually maintains dignity, but erupts like a volcano when lines are crossed.",
          "Bold and generous, but holds grudges against insults to family honor.",
          "Casually proposes lethal stratagems using elegant aristocratic vocabulary.",
          "Trusts hands-on experience and skill over pedantic theory.",
          "Acknowledges Leonid's skill but dislikes him personally.",
          "Has a surprising hobby of hunting giant monsters herself."
        ]
      }
    ],
    specialtiesTitle: "Specialties & Ecology",
    specialties: [
      {
        title: "Southern Stallions & Meat",
        subtitle: "Main Industry",
        summary: "Breeding of premium horses and livestock.",
        details: "Livestock farming using the vast plains is highly developed. Leads the horse racing industry and supplies quality meat empire-wide."
      },
      {
        title: "Meatcap",
        subtitle: "Rare Mushroom Monster",
        summary: "A mobile mushroom monster living only in Cantarel.",
        details: [
          "Moves freely on thin mycorrhizal legs under its cap.",
          "Adults are about the size of a chicken.",
          "Deep and rich beef flavor.",
          "Excellent for mana recovery and focus enhancement when consumed."
        ]
      }
    ]
  },
  common: {
    age: "yo",
    gender: "Gender",
    height: "Height",
    mbti: "MBTI",
    birthday: "Birthday",
    male: "Male",
    female: "Female",
    nextRegion: "Explore Next Region",
    nav_home: "HOME",
    nav_vaneris: "VANERIS",
    nav_nordnia: "NORDNIA",
    nav_esvard: "ESVARD"
  }
};

const ja = {
  nav: {
    home: "HOME",
    vaneris: "VANERIS",
    nordnia: "NORDNIA",
    esvard: "ESVARD",
    archive: "OFFICIAL ARCHIVE",
    footer: "© 2026 Official Archive. All Records Preserved.",
    lang: "言語"
  },
  home: {
    title1: "家門の争いで世界が",
    title2: "滅亡しました",
    subtitle: "「ってウェブ小説の世界観が、今の現実だって？！」",
    explore: "探索する",
    regions: {
      vaneris: {
        name: "バネリス公爵領",
        desc: "北部の寒風、魔晶石と魔道工学の聖地"
      },
      nordnia: {
        name: "ノルドニア帝国",
        desc: "大陸の中心、神聖な皇室と二つの公爵家の仲裁者"
      },
      esvard: {
        name: "エスバルド公爵領",
        desc: "南部の炎、強靭な騎士と軍事力のゆりかご"
      }
    }
  },
  nordnia: {
    tag: "Central Empire",
    title: "ノルドニア帝国",
    facts: {
      world: "世界観",
      worldDesc: "18世紀ヨーロッパ風の魔法世界",
      location: "位置",
      locationDesc: "大陸の中心",
      feature: "特徴",
      featureDesc: "魔法・精霊・オーラの存在"
    },
    desc: "大陸の覇者であり世界の中心。魔法と精霊、オーラが実在する世界で、皇室と二つの公爵家を軸に権力と均衡が維持される巨大な帝国です。",
    familyTitle: "皇室",
    familyLineage: "太陽・光・生命の神聖",
    familyDesc: "太陽と光の権能を受け継ぐ神聖な血統です。強力な武力や魔法よりも調和と生命力を重視し、二つの公爵家の拮抗した均衡を調整し、帝国全体の安定を維持する求心点の役割を果たします。",
    characters: [
      {
        name: "ラウリッツ・フォン・ノルドニア",
        fullName: "Lauritz von Nordnia",
        title: "帝国皇太子",
        keyword: "余裕、優しさ、調停者",
        ability: "光の最上位精霊術師",
        details: [
          "黄金色の髪と銀色の瞳を持つ目立つ外見。",
          "光の精霊王と契約した強力な精霊術師。",
          "人をリラックスさせる優しく余裕のある態度。",
          "相手の緊張をほぐす気の利いた冗談が得意。",
          "引退旅行に出た皇帝に代わり、皇室の実務を総括中。",
          "見かけによらず慢性的な疲労を抱えて生きている状態。",
          "二つの公爵家の対立を最側近で見守る皇室の核心人物。"
        ]
      }
    ],
    locationsTitle: "皇都メディオン",
    locationsDesc: "帝国の心臓。華やかな大理石と先端施設が調和する巨大都市。",
    locations: [
      {
        title: "皇宮",
        subtitle: "皇室の象徴",
        summary: "大会議の開催地。古代文献を保存した皇立図書館が位置。",
        details: [
          "毎週月曜日に大会議を開催。両公爵家の当主は必参加。",
          "皇立図書館を通じて希少書籍を保存。",
          "図書館の裏門が研究地区と繋がっている。"
        ]
      },
      {
        title: "カルディア広場",
        subtitle: "出会いの場",
        summary: "皇都の中央広場。季節ごとに大型祭りが開催。",
        details: "中央庭園、大型噴水、時計塔が位置しています。皇都の市民や貴族を代表する憩いの場であり、デートの名所です。"
      },
      {
        title: "ノクターン区域",
        subtitle: "裏路地",
        summary: "治安は不安定だが美味しい店が多数存在する皇都の外郭。",
        details: "皇都の外郭に位置し、情報屋や闇市が密集しています。治安は不安定ですが、有名なB級グルメの美味しい店が多数存在します。"
      },
      {
        title: "アルジェンの森",
        subtitle: "狩猟場",
        summary: "皇都北西部の広大な魔物狩猟区域。",
        details: "皇都北西部に位置する広大な森。魔物が頻繁に出没するため、騎士団やアカデミーの生徒たちの主な実戦訓練場として使用されます。"
      }
    ]
  },
  vaneris: {
    tag: "Northern Duchy",
    title: "バネリス公爵領",
    facts: {
      climate: "気候",
      climateDesc: "寒冷乾燥、頻繁な雪",
      location: "位置",
      locationDesc: "北部の雪原および山脈地帯",
      foundation: "基盤",
      foundationDesc: "魔晶石鉱山、万年雪、氷河"
    },
    desc: "北部の冷たい吹雪の中にそびえ立つ魔道工学の聖地。豊富な魔晶石資源を基盤に、帝国の魔法と学問の発展を主導する冷たく知的な地域です。",
    locationsTitle: "主要地域",
    locations: [
      {
        title: "ベラノバ",
        subtitle: "首都",
        desc: "北部最大の都市。バネリスの先端魔道工学が集約された眩しい魔道都市です。"
      },
      {
        title: "ズナウム",
        subtitle: "研究都市",
        desc: "バネリス傘下の魔道学術院。魔道工学と各種学術研究の中心地です。"
      },
      {
        title: "ベルゴラ",
        subtitle: "万年雪の山脈",
        desc: "巨大な雪山と氷河。スキーやスノーボードなどの観光が発達した北部最高の保養地です。"
      }
    ],
    familyTitle: "バネリス公爵家",
    familyLineage: "知恵・ルーン・星・魔法の神聖",
    familyDesc: "代々大魔導士を輩出してきた魔法の名家です。高い向学心と知的探求心をもとに、帝国の魔道工学の発展を牽引しています。皇室から莫大な魔道研究費の支援を受けています。",
    characters: [
      {
        name: "レオニト・バネリス",
        fullName: "Leonid Hartwig Vaneris",
        title: "バネリス公爵",
        keyword: "責任感、知的プライド",
        ability: "9サークル大魔導士",
        details: [
          "魔法と知識に対するプライドが非常に高く、多様な分野の教養に精通。",
          "家門と子供に対する責任感が強い頼もしい家長。",
          "表向きは無愛想に見えるが、家族には限りなく寛大な「親バカ」。",
          "論理的で体系的な思考を好む。",
          "研究に没頭する時は周りを全く気にしないワーカーホリック気質を持つ。",
          "ライバルであるエスバルド公爵を「野蛮な熊」と呼び、無知だと非難する。",
          "意外にも甘いもの（特にマカロン）が大好きだが、表向きは隠そうと努力している。"
        ]
      }
    ],
    specialtiesTitle: "特産物および生態",
    specialties: [
      {
        title: "魔晶石",
        subtitle: "核心資源",
        summary: "バネリス領の全域で採掘される鉱物。",
        details: "北部の魔道工学と熱源魔法陣の動力となる核心資源。バネリスの莫大な富と技術力の源泉です。"
      },
      {
        title: "タンブルルート (Tumbleroot)",
        subtitle: "希少な高山魔物",
        summary: "ベルゴラに生息する丸々とした形態の特産魔物。",
        details: [
          "筋合成の促進と元気回復に卓越した効能。",
          "鶏肉に似た優れた風味。",
          "引き抜かれた瞬間に根の足が生えて逃走を試みる。",
          "走り始めた途端にバランスを崩して転がってしまう可愛い習性を持つ。"
        ]
      }
    ]
  },
  esvard: {
    tag: "Southern Duchy",
    title: "エスバルド公爵領",
    facts: {
      climate: "気候",
      climateDesc: "温暖な地中海性",
      location: "位置",
      locationDesc: "南部の平原および険しい山脈",
      foundation: "基盤",
      foundationDesc: "豊富な日照量、巨大な森"
    },
    desc: "暖かい日差しと広大な平原が広がる南部の盾。剣と騎士道の精神が息づく場所で、強力な騎士団と武力を誇る誇り高き地域です。",
    locationsTitle: "主要地域",
    locations: [
      {
        title: "スカルドハイム",
        subtitle: "首都",
        desc: "南部最大の要塞都市であり公爵領の首都。揺るぎない国境防衛の中心です。"
      },
      {
        title: "カンタレル",
        subtitle: "大森林",
        desc: "なだらかな丘陵が果てしなく続く巨大な南部の森林地帯です。"
      }
    ],
    familyTitle: "エスバルド公爵家",
    familyLineage: "炎・戦争・嵐の神聖",
    familyDesc: "圧倒的な武力を基盤に外敵を防ぎ、帝国の盾の役割を果たします。代々騎士団と軍事力を最優先で育成してきており、剣術と肉体的な強靭さを崇拝しています。",
    characters: [
      {
        name: "アストリット・エスバルド",
        fullName: "Astrid Sigrún Esvard",
        title: "エスバルド公爵",
        keyword: "豪快さ、名誉重視",
        ability: "グランドソードマスター",
        details: [
          "代々ソードマスターを輩出してきた家門の名誉と伝統を何よりも重視。",
          "普段は品位と優雅さを失わないが、一線を越えた瞬間に火山のように爆発する。",
          "豪快で度胸があり、後腐れは短い方。ただし、家門の名誉を侮辱した事は長く覚えている。",
          "高尚な貴族の語彙で殺伐とした計略を平然と提案する独特の語り口を駆使する。",
          "衒学的な理論よりも直接ぶつかって得た経験と実力を信頼する。",
          "ライバルのレオニトの実力は認めるが、人間的には好ましく思っていない。",
          "巨大な魔物を直接狩るという意外な趣味を持つ。"
        ]
      }
    ],
    specialtiesTitle: "特産物および生態",
    specialties: [
      {
        title: "南部の種馬および肉類",
        subtitle: "主力産業",
        summary: "最高級の馬の飼育と牧畜業、競馬産業の発達。",
        details: "広大な平原と牧草地を活用した牧畜業が大きく発達しました。騎兵隊用の軍馬だけでなく競馬産業を主導しており、質の良い肉類を帝国全土に供給しています。"
      },
      {
        title: "ミートキャップ (Meatcap)",
        subtitle: "希少なキノコ魔物",
        summary: "カンタレル大森林にのみ生息する移動型キノコ魔物。",
        details: [
          "キノコの傘の下に薄い菌根の足がついており自由に移動する。",
          "成体は鶏ほどの大きさ。",
          "深く濃厚な牛肉の風味が絶品。",
          "摂取時の魔力回復と集中力向上に卓越した効果。"
        ]
      }
    ]
  },
  common: {
    age: "歳",
    gender: "性別",
    height: "身長",
    mbti: "傾向",
    birthday: "誕生日",
    male: "男性",
    female: "女性",
    nextRegion: "他の地域を探索する",
    nav_home: "HOME",
    nav_vaneris: "VANERIS",
    nav_nordnia: "NORDNIA",
    nav_esvard: "ESVARD"
  }
};

fs.writeFileSync(path.join(__dirname, 'src/locales/ko.json'), JSON.stringify(ko, null, 2));
fs.writeFileSync(path.join(__dirname, 'src/locales/en.json'), JSON.stringify(en, null, 2));
fs.writeFileSync(path.join(__dirname, 'src/locales/ja.json'), JSON.stringify(ja, null, 2));
console.log('Done writing locales.');
