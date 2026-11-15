import {
  Home,
  User,
  LayoutGrid,
  Sparkles,
  Phone,
  PhoneCall,
  MapPin,
  Smartphone,
  Palette,
  Building2,
  Rocket,
  MessageCircle,
  LayoutPanelLeft,
  Mail,
  Music2,
  Ruler,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  Download,
  Menu,
  X,
  Briefcase,
  Wrench,
  Check,
  ExternalLink,
  ChevronRight,
  Zap,
  Target,
  Search,
  PenTool,
  Code2,
  Lightbulb,
  Star,
  Clock,
  Layers,
  Hammer,
  BookOpen,
  Monitor,
  Contrast,
  Compass,
  type LucideProps,
} from "lucide-react";
import { type ReactElement, type ReactNode } from "react";

/* ---- Solid / filled icons used in the sidebar nav (match the Figma) ---- */
function Solid({ size = 24, children, ...props }: LucideProps & { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      {...props}
    >
      {children}
    </svg>
  );
}

const HomeSolid = (p: LucideProps) => (
  <Solid {...p}>
    <path d="M12 2.1 1 11h3v9a1 1 0 0 0 1 1h5v-6h4v6h5a1 1 0 0 0 1-1v-9h3L12 2.1Z" />
  </Solid>
);
const UserSolid = (p: LucideProps) => (
  <Solid {...p}>
    <circle cx="12" cy="8" r="4.2" />
    <path d="M3.5 20.4a8.5 8.5 0 0 1 17 0 1 1 0 0 1-1 1.1h-15a1 1 0 0 1-1-1.1Z" />
  </Solid>
);
const GridSolid = (p: LucideProps) => (
  <Solid {...p}>
    <rect x="3" y="3" width="8" height="8" rx="2.2" />
    <rect x="13" y="3" width="8" height="8" rx="2.2" />
    <rect x="3" y="13" width="8" height="8" rx="2.2" />
    <rect x="13" y="13" width="8" height="8" rx="2.2" />
  </Solid>
);
const ChevronsLeftSolid = (p: LucideProps) => (
  <Solid {...p}>
    <path d="M12.6 5.4 6 12l6.6 6.6 2.1-2.1L10.2 12l4.5-4.5z" />
    <path d="M18.6 5.4 12 12l6.6 6.6 2.1-2.1L16.2 12l4.5-4.5z" />
  </Solid>
);
const PhoneSolid = (p: LucideProps) => (
  <Solid {...p}>
    <path d="M19.95 21q-3.1 0-6.15-1.36t-5.55-3.86q-2.5-2.5-3.86-5.55T3 4.05q0-.45.3-.75t.75-.3h4.05q.35 0 .62.24t.33.56l.65 3.5q.05.4-.02.68t-.28.47L6.98 11.1q1 1.85 2.55 3.38t3.52 2.52l2.35-2.35q.22-.22.58-.33t.72-.07l3.45.7q.35.08.58.34T21 16v4.95q0 .45-.3.75t-.75.3Z" />
  </Solid>
);

const map = {
  home: Home,
  user: User,
  "layout-grid": LayoutGrid,
  sparkles: Sparkles,
  phone: Phone,
  "phone-call": PhoneCall,
  "map-pin": MapPin,
  smartphone: Smartphone,
  palette: Palette,
  "building-2": Building2,
  rocket: Rocket,
  "message-circle": MessageCircle,
  "layout-panel-left": LayoutPanelLeft,
  mail: Mail,
  "music-2": Music2,
  ruler: Ruler,
  "graduation-cap": GraduationCap,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  download: Download,
  menu: Menu,
  x: X,
  briefcase: Briefcase,
  wrench: Wrench,
  check: Check,
  "external-link": ExternalLink,
  "chevron-right": ChevronRight,
  zap: Zap,
  target: Target,
  search: Search,
  "pen-tool": PenTool,
  "code-2": Code2,
  lightbulb: Lightbulb,
  star: Star,
  clock: Clock,
  layers: Layers,
  hammer: Hammer,
  "book-open": BookOpen,
  monitor: Monitor,
  contrast: Contrast,
  compass: Compass,
  "home-solid": HomeSolid,
  "user-solid": UserSolid,
  "grid-solid": GridSolid,
  "chevrons-left-solid": ChevronsLeftSolid,
  "phone-solid": PhoneSolid,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = (map[name as IconName] ?? Sparkles) as (p: LucideProps) => ReactElement;
  return <Cmp {...props} />;
}
