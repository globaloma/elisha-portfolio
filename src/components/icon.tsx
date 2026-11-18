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
  Orbit,
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
const FolderSolid = (p: LucideProps) => (
  <Solid {...p}>
    <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h3.9a2 2 0 0 1 1.5.68L11.3 6H19a2 2 0 0 1 2 2v.5H2v-2Z" />
    <path d="M2.2 10h19.3a1 1 0 0 1 .98 1.22l-1.4 6.3A2 2 0 0 1 19.13 19H4.87a2 2 0 0 1-1.95-1.48L1.24 11.2A1 1 0 0 1 2.2 10Z" />
  </Solid>
);
const ToolboxSolid = (p: LucideProps) => (
  <Solid {...p}>
    <path d="M9 2.5A1.5 1.5 0 0 0 7.5 4v1.5h2V4.4h5v1.1h2V4A1.5 1.5 0 0 0 15 2.5H9Z" />
    <path d="M3 6.5A2 2 0 0 0 1 8.5V11h7v-.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v.5h7V8.5a2 2 0 0 0-2-2H3Z" />
    <path d="M16 12.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V12H1v6.5a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V12h-7v.5Z" />
  </Solid>
);
const BarChartSolid = (p: LucideProps) => (
  <Solid {...p}>
    <rect x="3" y="12" width="4.2" height="8.5" rx="1.1" />
    <rect x="9.9" y="7.5" width="4.2" height="13" rx="1.1" />
    <rect x="16.8" y="3.5" width="4.2" height="17" rx="1.1" />
  </Solid>
);
const GraduationCapSolid = (p: LucideProps) => (
  <Solid {...p}>
    <path d="M11.6 3.06a1 1 0 0 1 .8 0l9 3.9a1 1 0 0 1 0 1.84l-9 3.9a1 1 0 0 1-.8 0l-9-3.9a1 1 0 0 1 0-1.84l9-3.9Z" />
    <path d="M6 11.1v3.3c0 .5.27.95.72 1.17 1.33.66 3.28 1.23 5.28 1.23s3.95-.57 5.28-1.23c.45-.22.72-.67.72-1.17v-3.3l-5.33 2.31a2 2 0 0 1-1.34 0L6 11.1Z" />
    <path d="M20.5 9.2v4.55a.9.9 0 1 0 1.5 0V8.55l-1.5.65Z" />
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
  orbit: Orbit,
  "home-solid": HomeSolid,
  "user-solid": UserSolid,
  "grid-solid": GridSolid,
  "chevrons-left-solid": ChevronsLeftSolid,
  "phone-solid": PhoneSolid,
  "folder-solid": FolderSolid,
  "toolbox-solid": ToolboxSolid,
  "bar-chart-solid": BarChartSolid,
  "graduation-cap-solid": GraduationCapSolid,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = (map[name as IconName] ?? Sparkles) as (p: LucideProps) => ReactElement;
  return <Cmp {...props} />;
}
