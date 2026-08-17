import { motion } from 'motion/react';
import ExpandableInfo from '../components/shared/ExpandableInfo';
import CharacterCard from '../components/shared/CharacterCard';
import InterRegionNav from '../components/shared/InterRegionNav';

export default function Nordnia() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 w-full max-w-4xl mx-auto px-6 py-12"
    >
      {/* Header */}
      <header className="mb-16 text-center md:text-left border-b border-border-warm pb-12">
        <span className="text-sm tracking-[0.3em] text-nordnia-main/70 uppercase mb-4 block">Central Empire</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-nordnia-main mb-6">노르드니아 제국</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-ink-light">
          <ul className="space-y-3">
            <li className="flex gap-4"><span className="text-nordnia-main font-medium min-w-12">세계관</span> 18세기 유럽풍 마법 세계</li>
            <li className="flex gap-4"><span className="text-nordnia-main font-medium min-w-12">위치</span> 대륙의 중심</li>
            <li className="flex gap-4"><span className="text-nordnia-main font-medium min-w-12">특징</span> 마법·정령·오러의 실재</li>
          </ul>
          <p className="leading-relaxed text-sm md:text-base">
            대륙의 패자이자 세계의 중심. 마법과 정령, 오러가 실재하는 세계에서 황실과 두 공작가를 축으로 권력과 균형이 유지되는 거대한 제국입니다. 
          </p>
        </div>
      </header>

      {/* Imperial Family Info */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-nordnia-main mb-8 flex items-center gap-4">
          메디아르 황가
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        <div className="bg-nordnia-main/5 p-6 md:p-8 border border-nordnia-main/10 text-ink-light mb-8">
          <p className="mb-4">
            <strong className="text-nordnia-main">황금의 신성:</strong> 정령왕들과의 계약. 대대로 높은 정령 감응도.
          </p>
          <ul className="space-y-2 text-sm md:text-base list-disc list-inside">
            <li>대륙의 부와 경제권(무역로·금융망·광산) 사실상 장악.</li>
            <li>수백 년간 남부와 북부 두 공작가의 균형을 조율.</li>
            <li>에스바르드에 국방 유지비, 바네리스에 마도 연구비 지원.</li>
            <li>최근 두 가문의 갈등이 한계를 넘어서며 중재에 난항.</li>
          </ul>
        </div>

        {/* Characters */}
        <div className="space-y-2">
          <CharacterCard 
            name="라우리츠 메디아르"
            age="24"
            gender="남성"
            height="190cm"
            mbti="ENFJ"
            title="황태자"
            keyword="다정함, 만성 피로"
            ability="최상급 정령사 (빛의 정령왕과 계약중)"
            details={
              <ul className="list-disc list-inside space-y-1.5">
                <li>황금빛 머리카락과 은빛 눈동자를 지닌 눈에 띄는 외모.</li>
                <li>빛의 정령왕과 계약한 강력한 정령술사.</li>
                <li>사람을 편안하게 만드는 다정하고 여유로운 태도.</li>
                <li>상대의 긴장을 풀어주는 능글맞은 농담에 능숙.</li>
                <li>은퇴 여행을 떠난 황제를 대신해 황실 실무를 총괄 중.</li>
                <li>겉보기와 달리 만성적인 피로를 달고 살아가는 상태.</li>
                <li>두 공작가의 갈등을 최측근에서 지켜보는 황실 핵심 인물.</li>
              </ul>
            }
            themeColor="text-nordnia-main"
          />
        </div>
      </section>

      {/* Medion Districts */}
      <section className="mb-20">
        <h2 className="text-2xl font-serif text-nordnia-main mb-8 flex items-center gap-4">
          황도 메디온
          <div className="flex-1 h-[1px] bg-border-warm" />
        </h2>
        <p className="text-ink-light mb-6">제국의 심장. 화려한 대리석과 첨단 시설이 조화를 이루는 거대 도시.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          <ExpandableInfo 
            title="황궁"
            subtitle="황실의 상징"
            summary="대회의 개최지. 고대 문헌을 보존한 황립도서관 위치."
            details={
              <ul className="list-disc list-inside space-y-1">
                <li>매주 월요일 대회의 개최. 두 공작가 가주 필참.</li>
                <li>황립도서관을 통해 희귀 서적 보존.</li>
                <li>도서관 후문이 연구지구와 연결됨.</li>
              </ul>
            }
            imageUrl="https://gbe88.uk/EB/BG_3.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title="연구지구"
            subtitle="학술 중심지"
            summary="각 분야 학술기관과 연구시설 밀집 구역."
            details="거대 서점과 만물상회가 즐비하며, 제국의 수많은 학자와 연구원들이 거주하고 교류하는 지식의 장입니다."
            imageUrl="https://gbe88.uk/EB/BG_4.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title="대광장"
            subtitle="데이트 명소"
            summary="황도의 중앙 광장. 계절별 대형 축제 개최."
            details="중앙정원, 대형 분수, 시계탑이 위치해 있습니다. 황도 시민들과 귀족들의 대표적인 휴식처이자 데이트 명소입니다."
            imageUrl="https://gbe88.uk/EB/BG_5.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title="쿤스트할"
            subtitle="예술과 사교"
            summary="미술관, 대극장, 사교클럽 발달."
            details="귀족 사교의 중심. 미술관, 대극장, 사교클럽, 티룸이 발달해 있습니다."
            imageUrl="https://gbe88.uk/EB/BG_11.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title="글란체"
            subtitle="상업과 유행"
            summary="명품 상점가 및 디저트 맛집 밀집 구역."
            details="쿤스트할을 지나면 나타나는 상점가입니다. 고급 의류, 장신구, 유명 디저트 맛집이 밀집해 있어 유행을 선도합니다."
            imageUrl="https://gbe88.uk/EB/BG_12.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title="대성당"
            subtitle="종교 및 사교"
            summary="매달 30일 귀족 정기기도회 개최 (필참)."
            details="신성한 종교 시설인 동시에 귀족들의 주요 교류 장소입니다. 최근 연애운을 점치는 성물이 유명해져 젊은 귀족 여성들에게 큰 인기를 끌고 있습니다."
            imageUrl="https://gbe88.uk/EB/BG_10.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title="빈민가"
            subtitle="위험 구역"
            summary="치안이 불안정하나 맛집이 다수 존재하는 황도 외곽."
            details="황도 외곽에 위치하며 정보상과 암시장이 밀집해 있습니다. 치안이 불안정하지만 유명한 불량식품 맛집이 다수 존재합니다."
            imageUrl="https://gbe88.uk/EB/BG_6.webp"
            themeColor="text-nordnia-main"
          />
          <ExpandableInfo 
            title="사냥터"
            subtitle="마물 출몰 지역"
            summary="황도 서북부 광대한 마물 사냥 구역."
            details="서북부에 위치하며, 깊은 곳일수록 위험한 마물이 출몰합니다. 주변에 대장간과 마도구 상점이 발달해 있습니다."
            imageUrl="https://gbe88.uk/EB/BG_9.webp"
            themeColor="text-nordnia-main"
          />
        </div>
      </section>

      {/* East and West */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-serif text-nordnia-main mb-6 flex items-center gap-4">
              제국 동부
              <div className="flex-1 h-[1px] bg-border-warm" />
            </h2>
            <div className="bg-stone p-6 rounded-sm">
              <img src="https://gbe88.uk/EB/BG_13.webp" alt="제국 동부" className="w-full aspect-[21/9] object-cover rounded-sm mb-4" referrerPolicy="no-referrer" />
              <h3 className="font-serif text-lg text-ink font-semibold mb-2">곡창과 과수원</h3>
              <p className="text-sm text-ink-light mb-4">제국 최대의 곡창지대. 넓은 과수원이 발달하여 풍요로운 농업 생산량을 자랑합니다.</p>
              <div className="border-t border-border-warm pt-4 mt-2">
                <strong className="block text-ink text-sm mb-1">대표 도시: 브레가</strong>
                <p className="text-sm text-ink-light">동부의 중심 도시. 질 좋은 와인과 증류주 생산으로 유명합니다.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif text-nordnia-main mb-6 flex items-center gap-4">
              제국 서부
              <div className="flex-1 h-[1px] bg-border-warm" />
            </h2>
            <div className="bg-stone p-6 rounded-sm">
              <img src="https://gbe88.uk/EB/BG_14.webp" alt="제국 서부" className="w-full aspect-[21/9] object-cover rounded-sm mb-4" referrerPolicy="no-referrer" />
              <h3 className="font-serif text-lg text-ink font-semibold mb-2">무역과 해안</h3>
              <p className="text-sm text-ink-light mb-4">대양과 접한 광대한 해안지대. 외부 문물 유입과 해양 교역의 중심입니다.</p>
              <div className="border-t border-border-warm pt-4 mt-2">
                <strong className="block text-ink text-sm mb-1">대표 도시: 하브릭</strong>
                <p className="text-sm text-ink-light">서부 최대의 무역항. 마물 부산물과 진귀한 향신료 무역으로 막대한 부를 창출합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InterRegionNav />
    </motion.div>
  );
}
