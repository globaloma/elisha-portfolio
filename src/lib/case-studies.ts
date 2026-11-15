export type Swatch = { hex: string; name: string };

export type DesignBullet = { label: string; text?: string };

export type Design = {
  n: string;
  title: string;
  image: string;
  w: number;
  h: number;
  desc?: string;
  bullets?: DesignBullet[];
  focus?: string;
};

export type CaseInfo = {
  role: string;
  tool: string;
  users: string;
  platform: string;
  status?: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  shortName: string;
  /** How the brand name is written in the design header/back-bar (e.g. "TRANX"). Falls back to shortName. */
  displayName?: string;
  tagline: string;
  category: string;
  brand: string;
  theme: "dark" | "light";
  intro: string;
  /** Right-column blurb above the Selected Designs images. */
  designsIntro: string;
  /**
   * How much chrome to render around each design image:
   * - "full": number + title + lettered explanation (images are bare, no baked labels).
   * - "numbered": number + lettered explanation, but no title (images already carry their own title label).
   * - "none": image only (images carry all their own labels and text).
   */
  designsChrome: "full" | "numbered" | "none";
  /**
   * How each design's explanation bullets are laid out, to match the Figma:
   * - "lettered": each bullet is its own serif sub-heading "(A). Label" + paragraph (VoltPass, LocalBite).
   * - "brief" (default): a lead paragraph, a "Brief explanation" label, then inline "Label: text" bullets (Tranx, Bookmaker).
   */
  bulletStyle?: "lettered" | "brief";
  heroImage: string;
  heroW: number;
  heroH: number;
  overview: string[];
  goal: string;
  approach: string;
  info: CaseInfo;
  palette?: Swatch[];
  problem: string;
  solution: string;
  designs: Design[];
  reflection: string;
  learned?: string;
  challenges?: string;
  improve?: string;
  next: string;
};

const img = (slug: string, file: string) => `/case-studies/${slug}/${file}`;

export const caseStudies: Record<string, CaseStudy> = {
  tranx: {
    slug: "tranx",
    name: "Tranx — Fintech App",
    shortName: "Tranx",
    displayName: "TRANX",
    tagline: "Smarter payments. Made easy.",
    category: "AI-Powered Fintech · Mobile App",
    brand: "#2fd27b",
    theme: "dark",
    intro:
      "An AI-powered fintech mobile application designed to simplify everyday payments, money transfers, and financial transactions.",
    designsIntro:
      "Here are some selected designs for TRANX, which includes the splash & onboarding, dashboard, and so on.",
    designsChrome: "full",
    heroImage: img("tranx", "hero.png"),
    heroW: 1732,
    heroH: 1832,
    overview: [
      "TRANX is a mobile fintech application that combines digital wallet services with AI-powered payments. Users can fund their wallets, transfer money, pay bills, and send funds to other TRANX users using unique tags.",
      "The application is designed to make financial transactions faster, easier and more intuitive.",
    ],
    goal: "To create a modern fintech experience that simplifies everyday financial activities through AI-assisted payments and seamless money transfers.",
    approach:
      "I focused on combining AI-assisted transactions with familiar wallet functionality. The interface uses a clean dark theme, intuitive navigation, and clear visual hierarchy to make financial activities easier to understand and complete.",
    info: {
      role: "Product Designer & Flutter Developer",
      tool: "Figma",
      users: "Individuals seeking a simpler way to pay",
      platform: "Mobile application (iOS & Android)",
      status: "In Development",
    },
    problem:
      "Traditional payments applications often require users to navigate multiple screens and manually enter transaction details before completing simple payments. This can make everyday transactions feel unnecessarily complicated and time-consuming.",
    solution:
      "TRANX introduces an AI-assisted payment experience that allows users to initiate transactions through simple instructions, making payments more intuitive. It also supports wallet funding, transfers using unique TRANX tags, and saved beneficiaries for faster repeat transactions.",
    designs: [
      {
        n: "01",
        title: "Splash & Onboarding",
        image: img("tranx", "design-01.png"),
        w: 838,
        h: 580,
        desc: "The splash screen establishes TRANX's visual identity through its minimal logo, dark interface, and green gradient accents. The onboarding screens introduce the app's core capabilities, including instant payments, bill payment, airtime, data purchase, and its AI-powered assistant.",
        bullets: [
          { label: "Splash Screen", text: "Introduces the TRANX brand with a clean, minimal identity." },
          { label: "Onboarding 01", text: "Highlights the convenience of managing everyday payments in one app." },
          { label: "Onboarding 02", text: "Demonstrates how the AI assistant simplifies transfers by understanding the users instructions and requesting confirmation before proceeding." },
        ],
      },
      {
        n: "02",
        title: "Login & Registration",
        image: img("tranx", "design-02.png"),
        w: 838,
        h: 580,
        desc: "These screens demonstrate TRANX's account creation and returning-user authentication experience, with a focus on simplicity, security, and convenience.",
        bullets: [
          { label: "Registration", text: "Allows new users to create an account using their full name, email, phone number, and password, with clear password requirements." },
          { label: "Biometric Login", text: "Enables returning users to access their accounts quickly using fingerprint" },
          { label: "Password Login", text: "Provides an alternative login method with a masked phone number, password field, and password recovery option." },
        ],
      },
      {
        n: "03",
        title: "Dashboard",
        image: img("tranx", "design-03.png"),
        w: 838,
        h: 580,
        desc: "The TRANX dashboard provides users with a central space to manage their finances, it displays wallet balance, quick payment options, saved beneficiaries, recent transactions, and direct access to the AI payment assistant. The dark interface and green accents create a clean, modern experience while keeping essential financial actions easily accessible.",
      },
      {
        n: "04",
        title: "Add Money to Wallet",
        image: img("tranx", "design-04.png"),
        w: 838,
        h: 580,
        desc: "The wallet funding experience allows users to add money to their TRANX wallet. The process is divided into clear steps, from entering an amount and selecting a payment method, to confirming the transaction and receiving payment confirmation.",
        bullets: [
          { label: "Wallet Dashboard", text: "Displays the current balance and entry point for adding money." },
          { label: "Enter Amount", text: "Users select or enter their preferred funding amount." },
          { label: "Payment Method", text: "Choose the payment option suitable for you." },
          { label: "Card Details", text: "Enter card information and optionally save the card." },
          { label: "Review Payment", text: "Review the amount, payment method, fees and total." },
          { label: "Processing Payment", text: "Shows the payment progress." },
          { label: "Payment Success", text: "Confirms that funds have been added." },
          { label: "Transaction Receipt", text: "Provides transaction details, sharing and repeat-payment options." },
          { label: "Updated Dashboard", text: "Displays the wallet's new balance." },
        ],
      },
      {
        n: "05",
        title: "TRANX AI Transfers",
        image: img("tranx", "design-05.png"),
        w: 838,
        h: 600,
        desc: "This flow demonstrates how users can make bank transfers using the TRANX AI assistant using simple text instructions or voice commands, The AI identifies the recipient and amount, presents the transaction details for confirmation, and requests the user's transaction PIN before processing.",
        bullets: [
          { label: "Wallet Dashboard", text: "Access the AI transfer assistant from the homescreen" },
          { label: "AI Welcome", text: "Introduces the assistant and suggested payment commands" },
          { label: "Transfer Confirmation", text: "Displays recipient and transfer amount for review" },
          { label: "PIN Authentication", text: "Secures the transaction with a 4-digit PIN." },
          { label: "Processing Payment", text: "Shows the transfer progress." },
          { label: "Transfer Success", text: "Confirms that the money was sent" },
          { label: "Transaction Receipt", text: "Displays the transfer details and reference." },
          { label: "Updated Dashboard", text: "Reflects the reduced wallet balance." },
        ],
      },
    ],
    reflection:
      "Working on TRANX helped me explore how AI can simplify everyday financial transactions while maintaining security and user control. I learned the importance of combining intuitive designs, seamless payment flows and clear feedback to build trust. This project strengthened my understanding of fintech UX and designing smarter, more accessible financial experiences.",
    next: "localbite",
  },

  localbite: {
    slug: "localbite",
    name: "LocalBite — Food App",
    shortName: "LocalBites",
    tagline: "Your favourite local dishes, delivered.",
    category: "Food Ordering · Mobile App",
    brand: "#f59e0b",
    theme: "light",
    designsIntro:
      "Here are some selected designs for LocalBites, which includes the splash & onboarding, customer dashboard, vendor dashboard and so on.",
    designsChrome: "numbered",
    bulletStyle: "lettered",
    intro:
      "A mobile app designed for Nigerian food vendors, helping users order their local dishes from their favourite vendors with ease.",
    heroImage: img("localbite", "hero.png"),
    heroW: 1732,
    heroH: 1154,
    overview: [
      "LocalBites is a mobile app concept that connects food lovers with local vendors. Customers can discover nearby vendors and their dishes and place orders, while vendors get a simple way to showcase their menu and manage incoming orders.",
      "WhatsApp handles order confirmation and payment, keeping the experience familiar for both sides.",
    ],
    goal: "Make local food easier to discover and order while giving small food vendors a straightforward digital way to manage their businesses.",
    approach:
      "Design distinct customer and vendor journeys, with WhatsApp serving as the handoff for order confirmation and payment arrangements.",
    info: {
      role: "UI/UX Designer",
      tool: "Figma",
      users: "Food customers and local vendors",
      platform: "Mobile application",
    },
    problem:
      "Local food vendors need accessible ways to showcase their dishes and manage customer orders. Customers, meanwhile, need a convenient way to discover local dishes and find vendors offering them.",
    solution:
      "LocalBites brings food discovery and vendor management into one product, with separate experiences for customers and vendors. Orders are handled off to WhatsApp so customers can communicate with vendors and arrange payment directly.",
    designs: [
      {
        n: "01",
        title: "Splash & Onboarding",
        image: img("localbite", "design-01.png"),
        w: 838,
        h: 550,
        bullets: [
          {
            label: "Splash & onboarding",
            text: "The onboarding experience introduces users to LocalBite and its goal of making local food easier to discover and order. The splash screen establishes the brand identity, while the welcome screen communicates the app core value. Users can then choose whether to register as a customer or a vendor, providing a clear starting point for both user journey.",
          },
          {
            label: "User Registration & Login",
            text: "I designed straightforward account creation and authentication flow that allows customers to register, verify their phone number, and access their accounts. The login screen supports returning users, while the success screen provides clear feedback when registration is complete. Together these screens create a familiar and structured entry experience for customers joining LocalBites.",
          },
        ],
      },
      {
        n: "02",
        title: "Vendor Registration & Login",
        image: img("localbite", "design-02.png"),
        w: 838,
        h: 521,
        bullets: [
          {
            label: "Vendor Registration & Login",
            text: "I designed a dedicated and authentication flow for food vendors on LocalBite. The process guides vendors through setting up their business profiles, providing contact information, adding their business address, and creating secure login credentials. The registration journey is divided into manageable steps to make business setup easier to follow. Returning vendors can log into access their accounts, while the confirmation screen provides feedback when registration is successful.",
          },
        ],
      },
      {
        n: "03",
        title: "Customer discovery",
        image: img("localbite", "design-03.png"),
        w: 838,
        h: 521,
        bullets: [
          {
            label: "Home Screen - Discover",
            text: "Introduces customers to popular dishes, food categories, and nearby restaurants, providing a starting point for exploring local food.",
          },
          {
            label: "Dish Discovery - Explore",
            text: "Customers can browse food categories and view dishes with prices, ratings, and vendor information before adding items to their cart.",
          },
          {
            label: "Restaurant Menu - Choose",
            text: "Customer's can view a vendor's location, opening hours, available dishes, and prices, then add their preferred meals to cart.",
          },
        ],
      },
      {
        n: "04",
        title: "Customer checkout",
        image: img("localbite", "design-04.png"),
        w: 838,
        h: 521,
        bullets: [
          {
            label: "Cart Screen",
            text: "This screen allows users to review their selected dishes and quantities. They can also see the total of their orders and proceed to checkout.",
          },
          {
            label: "Checkout Screen",
            text: "On this checkout screen the users review the total, delivery fee, and enter their delivery details as shown on the screen.",
          },
          {
            label: "WhatsApp Screen",
            text: "The order details are prepared in a message to the vendor, where the customer can confirm availability and arrange payment.",
          },
        ],
      },
      {
        n: "05",
        title: "Vendor management",
        image: img("localbite", "design-05.png"),
        w: 838,
        h: 521,
        bullets: [
          {
            label: "Vendor Dashboard",
            text: "The dashboard gives vendors a quick snapshot of their business, including order totals, pending and completed orders, recent activity, and their current subscription plan.",
          },
          {
            label: "Order Management Screen",
            text: "Allows vendors to filter orders by status, review order summaries, and mark orders as completed once they have been fulfilled.",
          },
          {
            label: "Order Details Screen",
            text: "Presents customer contact information, delivery address, ordered items, and cost breakdown in one view, helping vendors understand each order before fulfilment.",
          },
          {
            label: "Menu Management Screen",
            text: "Enables vendors to maintain their menus by adding new dishes, updating new prices and descriptions, uploading food images, and removing unavailable items.",
          },
        ],
      },
    ],
    reflection:
      "LocalBites strengthened my understanding of designing connected experiences for different user groups. I explored how customers can discover local food and place orders, while vendors can manage their menus and orders through a dedicated experience. The project taught me to consider real-world constraints, such as using WhatsApp to facilitate order confirmation and payment arrangements.",
    next: "voltpass",
  },

  voltpass: {
    slug: "voltpass",
    name: "VoltPass — Smart Socket App",
    shortName: "VoltPass",
    tagline: "Smart living, powered by you.",
    category: "Smart Home / IoT · Mobile App",
    brand: "#3b82f6",
    theme: "dark",
    designsIntro:
      "Here are some selected designs for VoltPass, which includes the splash & onboarding, dashboard, and so on.",
    designsChrome: "full",
    bulletStyle: "lettered",
    intro:
      "A mobile app concept that allows users to connect smart sockets and manage them by room, including bedrooms, living rooms and kitchens.",
    heroImage: img("voltpass", "hero.png"),
    heroW: 1589,
    heroH: 989,
    overview: [
      "VoltPass is a mobile app concept that allows users to connect smart sockets and manage them by room, including the bedroom, living room, and kitchen.",
      "Users can also schedule the usage time of their smart sockets, so a socket automatically switches off when its scheduled time is reached.",
    ],
    goal: "To design a clear, convenient mobile experience for organizing smart sockets by room, monitoring energy usage, and accessing socket settings and scheduling features.",
    approach:
      "I focused on a dark interface with strong blue accents, clear room categories, and individual socket cards. The aim was to make the app's control and energy information easy to distinguish without overcrowding the interface.",
    info: {
      role: "UI/UX Designer",
      tool: "Figma",
      users: "People using smart sockets at home",
      platform: "Mobile application",
    },
    palette: [
      { hex: "#121212", name: "Background" },
      { hex: "#1E1E1E", name: "Cards" },
      { hex: "#3B82F6", name: "Primary" },
      { hex: "#22C55E", name: "Charging state" },
      { hex: "#FFFFFF", name: "Primary text" },
      { hex: "#9CA3AF", name: "Secondary text" },
    ],
    problem:
      "Managing multiple smart sockets across different rooms can become confusing when users cannot easily identify each device, check its status, or access its settings. Users may also need a convenient way to understand energy usage and schedule socket operation.",
    solution:
      "VoltPass brings socket management into one mobile interface. Users can organize devices by room, view active sockets and daily energy usage, and access individual socket controls. A dedicated editing screen also provides options for naming a socket, assigning its room, and configuring a schedule.",
    designs: [
      {
        n: "01",
        title: "Splash & Onboarding",
        image: img("voltpass", "design-01.png"),
        w: 838,
        h: 550,
        bullets: [
          {
            label: "Splash Screen",
            text: "The splash screen introduces VoltPass through a minimal dark interface, with the brand name and lighting symbol positioned prominently at the centre. The restrained layout establishes the app's identity and creates a consistent starting point for user journey.",
          },
          {
            label: "Onboarding Screen",
            text: "The onboarding screen introduces the idea of smarter living through a visual of a modern home and the message 'Experience the Future of smart living'. The slide-to-start interaction gives users a clear action to begin their journey into the application.",
          },
        ],
      },
      {
        n: "02",
        title: "Smart Home Dashboard & Energy Monitoring",
        image: img("voltpass", "design-02.png"),
        w: 838,
        h: 521,
        bullets: [
          {
            label: "Home Screen - Socket Control",
            text: "The home screen gives users a centralized view of their smart sockets across different rooms. Users can switch between rooms, check active socket counts, monitor energy usage, and access individual socket controls from one dashboard.",
          },
          {
            label: "Power Consumption - Energy Insights",
            text: "The power consumption screen helps users understand how much energy their connected sockets are using over a selected period. A bar chart presents usage trends, allowing users to compare consumption across dates and make more informed decisions about their electricity usage.",
          },
          {
            label: "Room Overview - Room Based Management",
            text: "The rooms screen organizes connected sockets by location, such as bedroom, kitchen, and living room. Each room displays its active socket count and energy usage, helping users understand where their electricity is being consumed and manage their devices more conveniently.",
          },
        ],
      },
      {
        n: "03",
        title: "Room-Based Socket Control & Scheduling",
        image: img("voltpass", "design-03.png"),
        w: 838,
        h: 521,
        bullets: [
          {
            label: "Rooms Overview - Organized by Location",
            text: "The rooms screen organizes smart sockets by areas of the home, including the bedroom, kitchen, and living room. Users can view the number of active sockets and the current energy usage for each room, making it easier to understand and manage their home's electricity consumption.",
          },
          {
            label: "Room Socket Management - Individual Control",
            text: "Within a selected room, users can view and control the sockets assigned to that space. Each socket has an independent on/off control, while editing and deletion options allows users to manage their connected devices more conveniently.",
          },
          {
            label: "Socket Scheduling - Automated Power Management",
            text: "The socket settings screen allows users to assign a name, select a room, and configure a schedule with specific start and stop times. This helps users automate socket operation, such as switching off selected devices when they are not expected to be at home, reducing unnecessary power usage and making everyday management more convenient.",
          },
        ],
      },
      {
        n: "04",
        title: "Socket & Room Setup",
        image: img("voltpass", "design-04.png"),
        w: 838,
        h: 558,
        bullets: [
          {
            label: "Add New - Quick Access",
            text: "Users tap the plus icon on the home screen to open a simple menu where they choose to add a socket or create a room.",
          },
          {
            label: "Socket Discovery & Selection",
            text: "The app searches for nearby compatible sockets and displays available device names. Users select the correct socket and connect it to VoltPass.",
          },
          {
            label: "Room Setup - Personalization",
            text: "Users can add a room picture, name the socket, and assign it to a room, keeping their smart home devices organized.",
          },
          {
            label: "Room Setup - Personalization",
            text: "A confirmation screen lets users know when a socket has been successfully added, providing a clear finish to setup process.",
          },
        ],
      },
    ],
    reflection:
      "Designing VoltPass helped me explore how smart-home technology can be made simpler and more intuitive. The project challenged me to translate technical features into clear, accessible experiences.",
    learned:
      "I learned the importance of clear navigation, visual hierarchy, and organizing smart sockets by room to make device management easier.",
    challenges:
      "One of the main challenges was designing a straightforward socket connection flow while making features such as energy monitoring and scheduling easy to understand.",
    improve:
      "With more time, I would explore real-time device testing, user feedback, and additional automation features to improve usability and reliability.",
    next: "bookmaker",
  },

  bookmaker: {
    slug: "bookmaker",
    name: "Bookmaker — Betting Website",
    shortName: "Bookmaker",
    tagline: "Accurate football betting tips, daily.",
    category: "Sports Betting · Responsive Website",
    brand: "#1f9d55",
    theme: "light",
    designsIntro:
      "Here are some selected designs for Bookmaker, which includes the homescreen, VIP dashboard, payment screens, news and so on.",
    designsChrome: "full",
    intro:
      "A sports betting website designed to help football fans explore daily match predictions, access betting insights, and unlock premium VIP tips.",
    heroImage: img("bookmaker", "hero.png"),
    heroW: 1732,
    heroH: 1154,
    overview: [
      "Bookmaker is a web-based sports betting concept that helps football fans explore daily match predictions, access betting insights and sports news, and unlock premium VIP tips — all through a clear and trustworthy interface.",
    ],
    goal: "To design a modern, accessible platform where users can easily find football predictions, explore match information, and understand the benefits of VIP membership through a clear and intuitive interface.",
    approach:
      "I approached the design with a focus on clarity, accessibility, and visual consistency. I organized the website into distinct sections for predictions, VIP access, news, testimonials, and FAQs. The green and gold colour scheme creates a recognizable sports identity, while consistent cards and calls to action make important information easier to scan.",
    info: {
      role: "UI/UX Designer",
      tool: "Figma",
      users: "Football fans and sports betting enthusiasts",
      platform: "Responsive website concept",
    },
    palette: [
      { hex: "#006400", name: "Primary green" },
      { hex: "#FFD700", name: "VIP gold" },
      { hex: "#FFFFFF", name: "Background" },
      { hex: "#000000", name: "Black" },
    ],
    problem:
      "Sports prediction websites can overwhelm users with cluttered layouts, inconsistent information and unclear distinctions between free and premium content. This can make it difficult to find relevant predictions and understand subscription options.",
    solution:
      "I designed a structured web experience that organizes football predictions, match tips, sports news, and VIP membership into clearly defined sections. A consistent visual hierarchy and prominent calls to action help users navigate the platform and understand the available features.",
    designs: [
      {
        n: "01",
        title: "Homepage",
        image: img("bookmaker", "design-01.png"),
        w: 838,
        h: 550,
        desc: "The homepage brings the core Bookmaker experience together in one place. It features a football stadium hero section, quick access to free predictions and VIP subscriptions, performance statistics, and match-prediction cards across major football leagues.",
        focus: "Clear information hierarchy, accessible navigation, and a strong visual distinction between free and VIP content.",
      },
      {
        n: "02",
        title: "Sports News & Article Details",
        image: img("bookmaker", "design-02.png"),
        w: 838,
        h: 521,
        bullets: [
          { label: "Sports News & Updates", text: "The news listing page organizes articles into visual cards, with search and filtering to help users discover relevant stories across football and other sports." },
          { label: "Article Details", text: "Selecting a card opens a dedicated article page with the headline, category, publication date, featured image, and content, plus related stories." },
        ],
        focus: "Content discovery, readable article layouts, consistent sports imagery, and easy navigation between stories.",
      },
      {
        n: "03",
        title: "VIP Subscription Flow",
        image: img("bookmaker", "design-03.png"),
        w: 838,
        h: 581,
        bullets: [
          { label: "Country Selection", text: "Users select their country to determine the appropriate subscription price and available payment methods." },
          { label: "Payment Guidance", text: "Users in supported African countries are directed to contact the admin for manual payment assistance via WhatsApp or Telegram." },
          { label: "Subscription Checkout", text: "The summary shows the selected country, billing currency, monthly price, plan, and available payment provider." },
          { label: "Payment Success", text: "After payment, users see their subscription status, expiry date, and unlocked VIP benefits." },
        ],
        focus: "A clear payment journey, country-based pricing, accessible payment instructions, and immediate confirmation of VIP access.",
      },
      {
        n: "04",
        title: "VIP Dashboard & Match Details",
        image: img("bookmaker", "design-04.png"),
        w: 838,
        h: 569,
        bullets: [
          { label: "VIP Dashboard", text: "Subscribers access daily predictions, high-odd selections, and match analysis, and can filter predictions and explore upcoming fixtures with tips, confidence levels and kickoff times." },
          { label: "Match Details & Analysis", text: "Selecting a match opens a breakdown with both teams, league positions, the main prediction, confidence rating, odds range, head-to-head results and standings." },
        ],
        focus: "A structured VIP experience that makes premium predictions easy to browse while providing deeper match information on demand.",
      },
      {
        n: "05",
        title: "Admin Dashboard",
        image: img("bookmaker", "design-05.png"),
        w: 838,
        h: 569,
        bullets: [
          { label: "Performance Overview", text: "Today's predictions, free and VIP predictions, active subscribers, wins and total matches." },
          { label: "Prediction Management", text: "Quick actions to add new predictions and view existing ones." },
          { label: "Recent Activity", text: "Tracks prediction posts, user subscriptions and match results." },
          { label: "Live Match Status", text: "Organizes matches by current status so the admin can monitor activity." },
        ],
        focus: "A clear admin dashboard that lets the admin manage predictions faster and access other site settings easily.",
      },
      {
        n: "06",
        title: "Prediction Management",
        image: img("bookmaker", "design-06.png"),
        w: 838,
        h: 569,
        bullets: [
          { label: "Prediction Filters", text: "Separate predictions by access type and match outcome — won, lost, and pending." },
          { label: "Prediction Table", text: "Match details, leagues, tip, odds, access type, status and kickoff time, with options to edit or delete." },
          { label: "Add Prediction Form", text: "The admin selects free or VIP access and enters teams, leagues, date, kickoff time, tip, odds, confidence level, and match analysis." },
          { label: "Publishing", text: "The admin can cancel or publish the prediction once the details are completed." },
        ],
        focus: "A clear admin prediction flow that makes it easier to navigate while adding a prediction.",
      },
    ],
    reflection:
      "Designing Bookmaker strengthened my skills in creating user-friendly web experiences. I learned to organize complex information, maintain visual consistency, and design intuitive user flows for both bettors and administrators.",
    next: "tranx",
  },
};

export const caseStudySlugs = Object.keys(caseStudies);
