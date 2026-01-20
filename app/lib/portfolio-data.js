// Portfolio data - inline to avoid import path issues
const portfolioData = {
  "items": [
    {
      "id": "govtech-platform",
      "title": "GovTech Platform: Digital Transformation at Scale",
      "slug": "govtech-platform",
      "outcome": "Reduced citizen processing time by 70% and increased platform adoption to 500K+ users",
      "role": "Senior Product Manager, E2E Product Strategy",
      "timeline": "12 months (Q2 2022 - Q2 2023)",
      "summary": "Led end-to-end product strategy and execution for government services digital transformation platform, managing cross-functional teams and stakeholder alignment across government agencies.",
      "featured": true,
      "category": "product-management",
      "image": "/images/portfolio/govtech.jpg",
      "content": {
        "keyOutcomes": [
          "Reduced citizen processing time from 3 weeks to 2 days (87% improvement)",
          "Increased platform adoption to 500K+ active users",
          "Improved citizen satisfaction score from 35% to 92%",
          "Generated $2.5M in annual government savings"
        ],
        "problemDescription": "Government citizen services were trapped in traditional waterfall processes. Citizens waited 3+ weeks for basic services (permits, licenses, registrations), with 60% abandonment rates. The legacy system couldn't handle modern user expectations or scale during peak periods. Government agencies needed a unified digital platform that could work across departments while maintaining security and compliance requirements.",
        "myRole": "As Senior Product Manager, I owned end-to-end product strategy, prioritization, and execution. Reported directly to CIO. Managed product team of 8, coordinated with 12+ government agencies, and oversaw $4M annual budget. Responsible for roadmap, feature prioritization, stakeholder management, and success metrics.",
        "whatIDid": "Conducted extensive stakeholder interviews across 12 agencies to understand unique requirements while identifying common patterns. Designed unified platform architecture that could serve diverse use cases. Led agile transformation: transitioned teams from waterfall to 2-week sprints with continuous delivery. Implemented feature flagging to enable rapid experimentation with government stakeholders. Built stakeholder council to manage competing interests and accelerate decision-making. Implemented analytics framework that reduced decision time from weeks to days.",
        "keyLearnings": "Government transformation isn't about technology—it's about trust and managing deeply ingrained processes. Building coalitions across agencies was more important than perfect product design. Continuous delivery in a government context requires trust-building, not just process changes. Success metrics matter more than feature lists; we won trust by showing citizen satisfaction improvements, not by launching new features.",
        "technologies": ["React", "Node.js", "PostgreSQL", "AWS", "Kubernetes"],
        "relatedArticles": []
      }
    },
    {
      "id": "team-topologies-restructuring",
      "title": "Team Topologies Restructuring: From Waterfall to Flow",
      "slug": "team-topologies-restructuring",
      "outcome": "Reduced time-to-market by 60% and improved deployment frequency from quarterly to weekly",
      "role": "Program Manager, Organizational Transformation",
      "timeline": "6 months (Q3 2021 - Q1 2022)",
      "summary": "Designed and executed organization-wide team restructuring using Team Topologies framework to enable continuous delivery and improve system thinking across 40+ person team.",
      "featured": true,
      "category": "program-management",
      "image": "/images/portfolio/team-topologies.jpg",
      "content": {
        "keyOutcomes": [
          "Reduced time-to-market by 60% (12 weeks → 5 weeks)",
          "Increased deployment frequency from quarterly to weekly releases",
          "Reduced cross-team dependencies by 75%",
          "Improved team satisfaction score from 5.2/10 to 8.1/10"
        ],
        "problemDescription": "Organization was structured around technology layers (Frontend, Backend, Data teams), creating handoff delays. Deployments happened quarterly, each requiring 3+ weeks of coordination. Teams blamed others for delays. The real issue: we had optimized for individual team efficiency, not system flow. Knowledge silos meant only 2-3 people could execute any major feature.",
        "myRole": "As Program Manager, I led the organizational transformation initiative. Designed the new structure, managed change across all teams, resolved conflicts between teams, and established new ways of working. Worked closely with Engineering Manager and VP to align organization structure with business strategy.",
        "whatIDid": "Researched Team Topologies framework and adapted it to our context. Conducted workshops with teams to design feature-focused cross-functional squads. Managed the transition: created overlap periods where old and new structures ran parallel. Established new meeting cadences, deployment processes, and on-call rotations. Created dashboards to track deployment frequency and time-to-market. Established guild structure for knowledge sharing across squads. Ran monthly retrospectives to fine-tune the structure.",
        "keyLearnings": "Changing organizations isn't really about the new structure—it's about helping people unlearn old patterns. People fear change; data removes emotion from decisions. Overlapping the transition periods was critical; we never had a 'day one' where everything changed. The best structures align autonomy with flow; we optimized for small, independent teams that could move fast.",
        "technologies": ["Jira", "Slack", "GitHub", "Confluence"],
        "relatedArticles": []
      }
    },
    {
      "id": "ai-strategy-implementation",
      "title": "AI Strategy Framework: From Experimentation to Production",
      "slug": "ai-strategy-implementation",
      "outcome": "Launched 3 AI features to production, 5 pilots in progress, improved decision-making by 40%",
      "role": "AI Strategy Lead",
      "timeline": "9 months (Ongoing)",
      "summary": "Developed and implemented company-wide AI strategy framework that moved organization from experimental AI projects to production-grade AI products with governance and quality standards.",
      "featured": true,
      "category": "ai-strategy",
      "image": "/images/portfolio/ai-strategy.jpg",
      "content": {
        "keyOutcomes": [
          "Launched 3 AI features to production serving 100K+ users",
          "Established AI governance framework preventing 8 risky projects",
          "Reduced AI pilot-to-production time from 6 months to 8 weeks",
          "Built and trained team of 5 ML engineers across organization"
        ],
        "problemDescription": "Organization wanted AI everywhere but had no strategy. Teams were running random AI experiments. ML models were developed without production readiness. No governance meant high-risk implementations. Decision-makers didn't understand AI capabilities and limitations. The real problem: AI enthusiasm without AI discipline.",
        "myRole": "As AI Strategy Lead, I created the framework for how organization would approach AI. Reported to Chief Product Officer. Worked with Engineering, Data, and Product teams to implement standards. Made go/no-go decisions on AI projects.",
        "whatIDid": "Researched AI maturity models and industry best practices. Created AI Strategy Framework with 5 decision gates. Established ML Engineering practices: model validation, data quality standards, monitoring. Created AI Steering Committee with representatives from all teams. Evaluated 12 proposed AI projects; approved 5 and rejected 7. Built case studies of successful AI implementations. Created training program for product managers on AI capabilities. Established AI Center of Excellence.",
        "keyLearnings": "AI success depends more on discipline than innovation. Moving fast with AI is possible with right governance. Most AI project failures aren't technical—they're organizational. Clear decision gates prevent wasted effort. Teaching non-technical leaders to evaluate AI projects was harder than the technical work.",
        "technologies": ["PyTorch", "TensorFlow", "MLflow", "Kubernetes", "Python"],
        "relatedArticles": []
      }
    }
  ]
};

export function getAllPortfolioItems() {
  return portfolioData.items;
}

export function getPortfolioItemBySlug(slug) {
  return portfolioData.items.find(item => item.slug === slug);
}

export function getFeaturedPortfolioItems() {
  return portfolioData.items.filter(item => item.featured === true);
}

export function getPortfolioItemsByCategory(category) {
  return portfolioData.items.filter(item => item.category === category);
}

export function getPortfolioItemsGroupedByCategory() {
  const grouped = {};
  portfolioData.items.forEach(item => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });
  return grouped;
}
