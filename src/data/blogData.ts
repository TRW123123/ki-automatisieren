export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  // Blog entries will be added here
  {
    id: "welcome-to-our-blog",
    title: "Transformation im Business durch KI",
    excerpt: "Entdecken Sie neue Wege zur Effizienzsteigerung durch Automatisierung Ihrer Geschäftsprozesse.",
    content: `
# Transformation im Business durch KI

Heutzutage schaffen KI-Technologien grundlegende Veränderungen in der Geschäftswelt. Unternehmen automatisieren nun Routineaufgaben und ermöglichen es ihren Mitarbeitern, sich auf strategischere Bereiche zu konzentrieren.

## Hauptthemen

### 1. Automatisierungsprozesse
- E-Mail-Marketing-Automatisierung
- Kundenservice-Chatbots
- Datenanalyse und Reporting

### 2. Effizienzsteigerung
Durch KI-gestützte Tools können Unternehmen Effizienzsteigerungen von bis zu 40% erreichen.

### 3. Zukunftspläne
KI-Integration spielt eine entscheidende Rolle dabei, dass Unternehmen Wettbewerbsvorteile erlangen.

In diesem Transformationsprozess ist es sehr wichtig, den richtigen Partner zu wählen. Beginnen Sie Ihre KI-Reise mit unserem Expertenteam.
    `,
    author: "KI-Experte",
    date: "2024-01-15",
    category: "Künstliche Intelligenz",
    tags: ["KI", "Automatisierung", "Business"],
    readTime: 5,
    image: "/placeholder.svg"
  }
];