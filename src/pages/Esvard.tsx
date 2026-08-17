import { motion } from 'motion/react';
import ExpandableInfo from '../components/shared/ExpandableInfo';
import CharacterCard from '../components/shared/CharacterCard';
import InterRegionNav from '../components/shared/InterRegionNav';

export default function Esvard() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 w-full max-w-4xl mx-auto px-6 py-12"
    >
      {/* Header */}
      <header className="mb-16 text-center md:text-left border-b border-border-warm pb-12">
        <span className="text-sm tracking-[0.3em] text-esvard-main/70 uppercase mb-4 block">Southern Duchy</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-esvard-main mb-6">에스바르드 공작령</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-ink-light">
          <ul className="space-y-3">
            <li className="flex gap-4"><span className="text-esvard-main font-medium min-w-12">위치</span> 제국 남부</li>
            <li className="flex gap-4"><span className="text-esvard-main font-medium min-w-12">지리</span> 대하 국경, 국경 요새</li>
            <li className="flex gap-4"><span className="text-esvard-main font-medium min-w-12">산업</span> 목축업 (말 사육, 경마), 군수</li>
          </ul>
          <p className="leading-relaxed text-sm md:text-base">
            대하를 사이에 두고 보니토 왕국과 국경을 맞대고 있는 군사적 요충지. 대대로 소드마스터를 배출해 온 제국 최강의 검술 명문이자 기사단 양성 가문입니다. 
          </p>
        </div>
      </header>

      {/* Locations */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-esvard-main mb-8 flex items-center gap-4">
          주요 지역
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-stone p-6 rounded-sm">
            <img src="https://gbe88.uk/EB/BG_8.webp" alt="에스바르드" className="w-full aspect-[21/9] object-cover rounded-sm mb-4" referrerPolicy="no-referrer" />
            <h3 className="font-serif text-lg text-ink font-semibold mb-2">스칼드하임</h3>
            <span className="text-xs text-ink-light tracking-widest uppercase block mb-3">수도</span>
            <p className="text-sm text-ink-light">남부 최대의 요새 도시이자 공작령의 수도. 흔들리지 않는 국경 방어의 중심입니다.</p>
          </div>
          <div className="bg-stone p-6">
            <h3 className="font-serif text-lg text-ink font-semibold mb-2">칸타렐</h3>
            <span className="text-xs text-ink-light tracking-widest uppercase block mb-3">대산림</span>
            <p className="text-sm text-ink-light">완만한 구릉이 끊임없이 이어지는 거대한 남부 산림 지대입니다.</p>
          </div>
        </div>
      </section>

      {/* Family Info */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-esvard-main mb-8 flex items-center gap-4">
          에스바르드 공작가
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        <div className="bg-esvard-main/5 p-6 md:p-8 border border-esvard-main/10 text-ink-light mb-8">
          <p className="mb-2">
            <strong className="text-esvard-main">신성혈통:</strong> 불꽃·전쟁·폭풍의 신성
          </p>
          <p>
            압도적인 무력을 바탕으로 외적을 막아내며 제국의 방패 역할을 수행합니다. 대대로 기사단과 군사력을 최우선으로 육성해 왔으며, 검술과 육체적 강인함을 숭상합니다.
          </p>
        </div>

        {/* Characters */}
        <div className="space-y-2">
          <CharacterCard 
            name="아스트리트 에스바르드"
            fullName="Astrid Sigrún Esvard"
            age="39"
            gender="여성"
            height="176cm"
            mbti="ESTJ"
            birthday="08.18"
            imageUrl="https://gbe88.uk/2/EB/A.webp"
            title="에스바르드 공작"
            keyword="호탕함, 명예 중시"
            ability="그랜드 소드마스터"
            details={
              <ul className="list-disc list-inside space-y-1.5">
                <li>대대로 소드마스터를 배출한 가문의 명예와 전통을 무엇보다 중시.</li>
                <li>평소에는 품위와 우아함을 잃지 않으나, 선을 넘는 순간 화산처럼 폭발.</li>
                <li>호탕하고 통이 크며 뒤끝은 짧은 편. 단, 가문의 명예를 모욕한 일은 오래 기억.</li>
                <li>고상한 귀족 어휘로 살벌한 계책을 태연하게 제안하는 독특한 화법 구사.</li>
                <li>현학적인 이론보다 직접 부딪혀 얻은 경험과 실력을 신뢰.</li>
                <li>라이벌인 레오니트의 실력은 인정하나 인간적으로는 탐탁지 않게 여김.</li>
                <li>거대한 마물을 직접 사냥하는 의외의 취미 보유.</li>
                <li><strong>향:</strong> 짙은 장미와 은은한 앰버가 섞인 독특한 향.</li>
              </ul>
            }
            themeColor="text-esvard-main"
          />
          <CharacterCard 
            name="하콘 에스바르드"
            fullName="Håkon August Esvard"
            age="19"
            gender="남성"
            height="189cm"
            mbti="ESTJ"
            birthday="11.11"
            imageUrl="https://gbe88.uk/2/EB/H.webp"
            title="소공작 / 차기 가주"
            keyword="완벽주의, 가족애"
            ability="소드 엑스퍼트 상급"
            details={
              <ul className="list-disc list-inside space-y-1.5">
                <li>교양·예법·체력·검술을 두루 갖춘 뛰어난 후계자.</li>
                <li>정정당당한 승부의 결과는 상대에게도 쿨하게 인정.</li>
                <li>사춘기의 흔적이 남아 있어 자신의 영역을 건드리는 상황에 예민.</li>
                <li>바네리스 소공작 카지미르와 치열한 경쟁 관계.</li>
                <li>상대가 가족을 건드리는 순간 단호하고 냉정하게 대응.</li>
                <li>마물 수집과 미술관 관람이라는 차분한 취미 보유.</li>
                <li><strong>향:</strong> 진저를 스친 듯한 차분한 시더우드 향.</li>
              </ul>
            }
            themeColor="text-esvard-main"
          />
          <CharacterCard 
            name="에길 에스바르드"
            fullName="Egil Vidar Esvard"
            age="13"
            gender="남성"
            height="164cm"
            title="차남"
            keyword="승부욕, 인정욕구"
            ability="소드 엑스퍼트 초입"
            birthday="03.21"
            imageUrl="https://gbe88.uk/2/EB/E.webp"
            details={
              <ul className="list-disc list-inside space-y-1.5">
                <li>뛰어난 형의 그늘에서 자신의 존재감을 증명하려는 욕구 강함.</li>
                <li>계획이 성공한다고 확신하는 순간 사고를 치기 쉬운 타입.</li>
                <li>칭찬에 약하며 인정받으면 금세 기분이 좋아지는 솔직한 성격.</li>
                <li>형을 존경하면서도 은근한 경쟁심을 품음. 반항적인 사춘기 진행 중.</li>
                <li>바네리스 공녀 잉그리드와 만나기만 하면 자존심을 건드리는 앙숙 관계.</li>
                <li>복숭아 알레르기 체질. 대륙의 영웅담 읽기를 즐김.</li>
                <li><strong>향:</strong> 달콤한 풋사과 같은 향.</li>
              </ul>
            }
            themeColor="text-esvard-main"
          />
        </div>
      </section>

      {/* Specialties & Monsters */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-esvard-main mb-8 flex items-center gap-4">
          특산물 및 생태
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        <div className="space-y-2">
          <ExpandableInfo 
            title="남부 종마 및 육류"
            subtitle="주력 산업"
            summary="최고급 말 사육 및 목축업, 경마 산업 발달."
            details="드넓은 평원과 목초지를 활용한 목축업이 크게 발달했습니다. 기병대용 군마뿐 아니라 경마 산업을 주도하고 있으며, 질 좋은 육류를 제국 전역에 공급합니다."
            themeColor="text-esvard-main"
          />
          <ExpandableInfo 
            title="미트캡 (Meatcap)"
            subtitle="희귀 버섯 마물"
            summary="칸타렐 대산림에만 서식하는 이동형 버섯 마물."
            details={
              <ul className="list-disc list-inside space-y-1">
                <li>버섯 갓 아래 얇은 균근 다리가 달려 자유롭게 이동.</li>
                <li>성체는 닭 정도의 크기.</li>
                <li>깊고 진한 소고기 풍미가 일품.</li>
                <li>섭취 시 마력 회복과 집중력 향상에 탁월한 효과.</li>
              </ul>
            }
            themeColor="text-esvard-main"
          />
        </div>
      </section>

      <InterRegionNav />
    </motion.div>
  );
}
