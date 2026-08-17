import { motion } from 'motion/react';
import ExpandableInfo from '../components/shared/ExpandableInfo';
import CharacterCard from '../components/shared/CharacterCard';
import InterRegionNav from '../components/shared/InterRegionNav';

export default function Vaneris() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 w-full max-w-4xl mx-auto px-6 py-12"
    >
      {/* Header */}
      <header className="mb-16 text-center md:text-left border-b border-border-warm pb-12">
        <span className="text-sm tracking-[0.3em] text-vaneris-main/70 uppercase mb-4 block">Northern Duchy</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-vaneris-main mb-6">바네리스 공작령</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-ink-light">
          <ul className="space-y-3">
            <li className="flex gap-4"><span className="text-vaneris-main font-medium min-w-12">위치</span> 제국 북부</li>
            <li className="flex gap-4"><span className="text-vaneris-main font-medium min-w-12">기반</span> 마정석 광산, 만년설, 빙하</li>
            <li className="flex gap-4"><span className="text-vaneris-main font-medium min-w-12">산업</span> 첨단 마도공학, 온실 농업</li>
          </ul>
          <p className="leading-relaxed text-sm md:text-base">
            대륙 북부의 설원 지대를 통치하는 대마법사 배출 명문. 혹독한 기후를 지녔으나, 열원 마법진과 마력 기반 온실 농업 등 첨단 마도공학이 크게 발달하여 쾌적한 도시 생활권을 형성하고 있습니다.
          </p>
        </div>
      </header>

      {/* Locations */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-vaneris-main mb-8 flex items-center gap-4">
          주요 지역
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-stone p-6">
            <h3 className="font-serif text-lg text-ink font-semibold mb-2">벨라노바</h3>
            <span className="text-xs text-ink-light tracking-widest uppercase block mb-3">수도</span>
            <p className="text-sm text-ink-light">북부 최대 도시. 바네리스의 첨단 마도공학이 집약된 눈부신 마도도시입니다.</p>
          </div>
          <div className="bg-stone p-6">
            <h3 className="font-serif text-lg text-ink font-semibold mb-2">즈나움</h3>
            <span className="text-xs text-ink-light tracking-widest uppercase block mb-3">연구 도시</span>
            <p className="text-sm text-ink-light">바네리스 산하 마도학술원. 마도공학과 각종 학술 연구의 중심지입니다.</p>
          </div>
          <div className="bg-stone p-6">
            <h3 className="font-serif text-lg text-ink font-semibold mb-2">벨고라</h3>
            <span className="text-xs text-ink-light tracking-widest uppercase block mb-3">만년설 산맥</span>
            <p className="text-sm text-ink-light">거대한 설산과 빙하. 스키 및 스노보드 관광이 발달한 북부 최고의 휴양지입니다.</p>
          </div>
        </div>
      </section>

      {/* Family Info */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-vaneris-main mb-8 flex items-center gap-4">
          바네리스 공작가
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        <div className="bg-vaneris-main/5 p-6 md:p-8 border border-vaneris-main/10 text-ink-light mb-8">
          <p className="mb-2">
            <strong className="text-vaneris-main">신성혈통:</strong> 지혜·룬·별·마법의 신성
          </p>
          <p>
            대대로 대마법사를 배출해 온 마법 명가입니다. 높은 학구열과 지적 탐구심을 바탕으로 제국의 마도공학 발전을 견인하고 있습니다. 황실로부터 막대한 마도 연구비를 지원받습니다.
          </p>
        </div>

        {/* Characters */}
        <div className="space-y-2">
          <CharacterCard 
            name="레오니트 바네리스"
            fullName="Leonid Hartwig Vaneris"
            age="40"
            gender="남성"
            height="187cm"
            mbti="INTJ"
            birthday="01.04"
            imageUrl="https://gbe88.uk/2/EB/L.webp"
            title="바네리스 공작"
            keyword="책임감, 지적 자부심"
            ability="9서클 대마법사"
            details={
              <ul className="list-disc list-inside space-y-1.5">
                <li>마법과 지식에 대한 자부심이 대단하며 다양한 분야의 교양에 능통.</li>
                <li>가문과 자녀에 대한 책임감이 강한 듬직한 가장.</li>
                <li>아스트리트의 검술은 인정하나, 경험과 체득만 중시하는 사고방식은 비판.</li>
                <li>어려운 이론과 현학적인 표현으로 아스트리트를 도발하는 것을 즐김.</li>
                <li>상대가 괄괄해질수록 차분한 태도를 유지하며 여유를 부리는 편.</li>
                <li>에스바르드를 야만적이라 평가하며 자녀들에게도 경계 교육 중.</li>
                <li>검술에도 의외로 상당한 소양을 갖춤. 와인 애호가.</li>
                <li><strong>향:</strong> 차가운 오존 아래 은은한 프랑킨센스가 남는 향.</li>
              </ul>
            }
            themeColor="text-vaneris-main"
          />
          <CharacterCard 
            name="카지미르 바네리스"
            fullName="Kazimir Bolesław Vaneris"
            age="18"
            gender="남성"
            height="181cm"
            mbti="INTJ"
            birthday="09.08"
            imageUrl="https://gbe88.uk/2/EB/K.webp"
            title="소공작 / 차기 가주"
            keyword="지적 우월감, 예의바름"
            ability="7서클 마법사"
            details={
              <ul className="list-disc list-inside space-y-1.5">
                <li>어린 시절부터 체계적인 교육을 받은 마법 수재.</li>
                <li>지식과 예법을 중시하며 기준에 어긋나는 행동에는 까다롭게 반응.</li>
                <li>타인을 '우민'이라 부르는 데 거리낌이 없을 정도로 지적 우월감이 강함.</li>
                <li>레이디에게는 예의 바른 신사지만 남성에게는 한층 엄격한 태도 유지.</li>
                <li>에스바르드 소공작 하콘을 라이벌로 여기며, 자신이 검술 외 모든 면에서 우월하다고 생각.</li>
                <li>세간에서 하콘과 비슷한 위치로 평가되는 것에 자존심 상해함.</li>
                <li>단것을 매우 좋아하며 핏을 위해 꾸준히 운동. 귀신을 무서워하는 약점 보유.</li>
                <li><strong>향:</strong> 네롤리와 은은한 백합이 섞인 향.</li>
              </ul>
            }
            themeColor="text-vaneris-main"
          />
          <CharacterCard 
            name="잉그리드 바네리스"
            fullName="Ingrid Albina Vaneris"
            age="14"
            gender="여성"
            height="156cm"
            mbti="ESFJ"
            birthday="05.05"
            imageUrl="https://gbe88.uk/2/EB/I.webp"
            title="공녀"
            keyword="자존심, 솔직함"
            ability="3서클 마법사"
            details={
              <ul className="list-disc list-inside space-y-1.5">
                <li>자신이 세상의 중심이라고 믿을 만큼 자존심 강하고 당당한 소녀.</li>
                <li>칭찬에 약하며 기분이나 마음에 들지 않는 상황을 표정에 다 드러냄.</li>
                <li>오빠의 보호와 엄격한 교육으로 숙녀다운 대접에 유난히 민감.</li>
                <li>에스바르드의 차남 에길을 야생마 취급하며 극도로 싫어함.</li>
                <li>에길을 상대로 자신의 우월함을 증명하는 일에 집착.</li>
                <li>로맨스 소설을 즐겨 읽으며 남몰래 황태자를 동경 중.</li>
                <li>다리가 많은 벌레를 극도로 싫어하며 싸구려 원단에 피부가 반응하는 체질.</li>
                <li><strong>향:</strong> 상큼한 레몬과 달콤한 자두가 어우러진 향.</li>
              </ul>
            }
            themeColor="text-vaneris-main"
          />
        </div>
      </section>

      {/* Specialties & Monsters */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-vaneris-main mb-8 flex items-center gap-4">
          특산물 및 생태
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        <div className="space-y-2">
          <ExpandableInfo 
            title="마정석"
            subtitle="핵심 자원"
            summary="바네리스 영지 전역에서 채굴되는 광물."
            details="북부 마도공학과 열원 마법진의 동력이 되는 핵심 자원. 바네리스의 막대한 부와 기술력의 원천입니다."
            themeColor="text-vaneris-main"
          />
          <ExpandableInfo 
            title="텀블루트 (Tumbleroot)"
            subtitle="희귀 고산 마물"
            summary="벨고라에 서식하는 오동통하고 둥근 형태의 특산 마물."
            details={
              <ul className="list-disc list-inside space-y-1">
                <li>근합성 촉진과 원기 회복에 탁월한 효능.</li>
                <li>닭고기와 비슷한 뛰어난 풍미.</li>
                <li>뽑히는 순간 뿌리다리가 자라 도주 시도.</li>
                <li>달리기 시작하자마자 중심을 잃고 넘어져 구르는 귀여운 습성 보유.</li>
              </ul>
            }
            themeColor="text-vaneris-main"
          />
        </div>
      </section>

      <InterRegionNav />
    </motion.div>
  );
}
