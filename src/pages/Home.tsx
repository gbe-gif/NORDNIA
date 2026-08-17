import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const regions = [
  {
    id: 'vaneris',
    name: '바네리스 공작령',
    enName: 'VANERIS',
    desc: '북부의 한풍, 마정석과 마도공학의 성지',
    path: '/vaneris',
    image: 'https://gbe88.uk/2/EB/p_v.webp',
    textColor: 'text-vaneris-accent',
    border: 'border-vaneris-accent/30',
  },
  {
    id: 'nordnia',
    name: '노르드니아 제국',
    enName: 'NORDNIA',
    desc: '대륙의 중심, 신성한 황실과 두 공작가의 중재자',
    path: '/nordnia',
    image: 'https://gbe88.uk/2/EB/p_n.webp',
    textColor: 'text-nordnia-accent',
    border: 'border-nordnia-accent/30',
  },
  {
    id: 'esvard',
    name: '에스바르드 공작령',
    enName: 'ESVARD',
    desc: '남부의 불꽃, 강인한 기사들과 군사력의 요람',
    path: '/esvard',
    image: 'https://gbe88.uk/2/EB/p_a.webp',
    textColor: 'text-esvard-accent',
    border: 'border-esvard-accent/30',
  }
];

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] w-full px-4 py-12 md:py-0">
      
      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink leading-tight mb-6">
          가문 싸움에 세계가<br className="hidden sm:block"/> 개같이 멸망했습니다
        </h1>
        <p className="text-lg sm:text-xl text-ink-light font-medium tracking-wide">
          "라는 웹소설 세계관이 이제 내 현생이라고?!"
        </p>
      </motion.div>

      {/* Region Navigation Panels */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 h-auto md:h-[500px]">
        {regions.map((region, idx) => (
          <Link key={region.id} to={region.path} className="group relative block w-full h-[250px] md:h-full overflow-hidden rounded-sm">
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${region.image})` }}
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            
            {/* Content */}
            <div className={`absolute inset-0 p-8 flex flex-col justify-end ${region.textColor} border ${region.border} m-2`}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + (idx * 0.2) }}
              >
                <p className="text-sm tracking-[0.3em] opacity-80 mb-2">{region.enName}</p>
                <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-3">{region.name}</h2>
                <div className="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-sm opacity-90 mb-6">{region.desc}</p>
                  <span className="inline-flex items-center text-xs uppercase tracking-widest border-b border-current pb-1">
                    탐험하기
                  </span>
                </div>
              </motion.div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
