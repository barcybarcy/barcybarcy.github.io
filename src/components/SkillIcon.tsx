import type { IconBaseProps, IconType } from 'react-icons';
import { FaAws, FaJava } from 'react-icons/fa6';
import { LuBadgeCheck, LuCodeXml, LuCpu, LuIdCard, LuLayers3, LuShoppingBag } from 'react-icons/lu';
import { SiAnsys, SiC, SiFastapi, SiGooglecloud, SiPython, SiYolo } from 'react-icons/si';
import { TbBrandAdobePremiere } from 'react-icons/tb';

function AbletonMark({ size = 20, ...props }: IconBaseProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M1 5h1.8v14H1zm3.2 0H6v14H4.2zm3.2 0h1.8v14H7.4zm3.2 0h1.8v14h-1.8zm3.8 0H23v1.8h-8.6zm0 4.1H23v1.8h-8.6zm0 4.1H23V15h-8.6zm0 4H23V19h-8.6z" />
    </svg>
  );
}

type SkillMark = { icon: IconType; color: string };

const computerScience: SkillMark = { icon: LuCpu, color: '#424242' };
const commerce: SkillMark = { icon: LuShoppingBag, color: '#168544' };

// Static imports keep every icon in the local bundle and allow tree shaking.
const skillMarks: Record<string, SkillMark> = {
  'CS 지식': computerScience,
  'Computer science fundamentals': computerScience,
  '이커머스 사업 경험': commerce,
  'E-commerce business experience': commerce,
  C: { icon: SiC, color: '#5E77A0' },
  Java: { icon: FaJava, color: '#BC5E2C' },
  Python: { icon: SiPython, color: '#3776AB' },
  FastAPI: { icon: SiFastapi, color: '#008C7E' },
  YOLO: { icon: SiYolo, color: '#25385E' },
  AWS: { icon: FaAws, color: '#BA7518' },
  'Google Cloud': { icon: SiGooglecloud, color: '#4285F4' },
  'CFD · Ansys Fluent': { icon: SiAnsys, color: '#A77C12' },
  '3D Slicer': { icon: LuLayers3, color: '#477C88' },
  'Ableton Live': { icon: AbletonMark, color: '#191919' },
  'Adobe Premiere Pro': { icon: TbBrandAdobePremiere, color: '#6951A1' },
  credential: { icon: LuBadgeCheck, color: '#168544' },
  license: { icon: LuIdCard, color: '#505050' },
};

/** Decorative marks; the neighboring visible label supplies the accessible name. */
export function SkillIcon({ name }: { name: string }) {
  const { icon: Icon, color } = skillMarks[name] ?? { icon: LuCodeXml, color: '#505050' };

  return (
    <Icon
      aria-hidden="true"
      focusable="false"
      className="skill-icon"
      size={20}
      color={color}
      style={{ display: 'block', width: 20, height: 20, flexShrink: 0 }}
    />
  );
}
