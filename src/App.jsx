import { useState } from 'react'

const LINKEDIN_URL = 'https://www.linkedin.com/in/charleymorin/'
const GITHUB_URL = 'https://github.com/charlesmorin'
const EMAIL = 'charles@charlesmorin.ca'

/* ─── UI strings ─────────────────────────────────────────── */

const ui = {
  en: {
    tagline: "Platform developer with 20+ years building cloud-native infrastructure, CI/CD pipelines, and developer tooling.",
    sectionLabel: "Experience",
    scrollLabel: "Experience",
  },
  fr: {
    tagline: "Développeur de plateforme avec plus de 20 ans d'expérience en infrastructure cloud-native, pipelines CI/CD et outils pour développeurs.",
    sectionLabel: "Expérience",
    scrollLabel: "Expérience",
  },
}

/* ─── Experience data ────────────────────────────────────── */

const companies = [
  {
    id: 1,
    name: "Upgrade, Inc.",
    totalPeriod: { en: "Apr 2022 – Present", fr: "avr. 2022 – présent" },
    location: { en: "Remote", fr: "Télétravail" },
    roles: [
      {
        id: "1a",
        title: { en: "Principal Software Developer", fr: "Développeur logiciel principal" },
        period: { en: "Apr 2022 – Present", fr: "avr. 2022 – présent" },
        description: {
          en: [
            "Promoted to principal developer in Feb 2026, taking on expanded technical leadership and scope within the platform tooling team.",
            "Delivered a large-scale Tekton CI/CD platform as a replacement for a fleet of legacy Jenkins instances.",
            "Migrated 1000+ repositories to the modern Tekton-based CI/CD platform.",
            "Shipped a high-impact CD pipeline enabling teams to deploy to production on PR merge.",
            "Delivered a CI pipeline integration for AI-powered i18n translations.",
            "Built Argo Workflows pipelines to orchestrate process automation and cross-tool integrations.",
            "Brought a mission-critical legacy project from near-zero to high test coverage, making it easier to maintain.",
            "Drove significant infrastructure cost optimizations across on-demand Kubernetes dev stacks and CI/CD platforms.",
          ],
          fr: [
            "Promu développeur principal en février 2026, avec un leadership technique et une portée élargis au sein de l'équipe d'outils de plateforme.",
            "Livré une plateforme CI/CD Tekton à grande échelle en remplacement d'une flotte d'instances Jenkins héritées.",
            "Migré plus de 1 000 dépôts vers la plateforme CI/CD moderne basée sur Tekton.",
            "Livré un pipeline de déploiement continu à fort impact permettant aux équipes de déployer en production à la fusion d'une PR.",
            "Livré une intégration de pipeline CI pour les traductions i18n alimentées par l'IA.",
            "Construit des pipelines Argo Workflows pour orchestrer l'automatisation des processus et les intégrations entre outils.",
            "Amené un projet critique hérité d'une couverture de tests quasi nulle à une couverture élevée, facilitant sa maintenance.",
            "Réalisé des optimisations significatives des coûts d'infrastructure sur les environnements Kubernetes à la demande et les plateformes CI/CD.",
          ],
        },
        tags: ["Tekton", "Argo Workflows", "Kubernetes", "Go", "Python", "CI/CD"],
      },
    ],
  },
  {
    id: 2,
    name: "Canada Revenue Agency",
    totalPeriod: { en: "Dec 2004 – May 2022", fr: "déc. 2004 – mai 2022" },
    location: { en: "Shawinigan / Ottawa", fr: "Shawinigan / Ottawa" },
    roles: [
      {
        id: "2a",
        title: { en: "IT Specialist", fr: "Spécialiste en TI" },
        period: { en: "Jan 2016 – May 2022", fr: "janv. 2016 – mai 2022" },
        description: {
          en: "Java microservices development, on-premise DevOps platform implementation (Gitea, Jenkins, SonarQube, Artifactory, Prometheus/Grafana), process automation, infrastructure ownership, and coaching and mentoring.",
          fr: "Développement de microservices Java, mise en place d'une plateforme DevOps sur site (Gitea, Jenkins, SonarQube, Artifactory, Prometheus/Grafana), automatisation des processus, gestion de l'infrastructure, ainsi que coaching et mentorat.",
        },
        tags: ["Java", "Jenkins", "Prometheus", "Grafana", "Ansible", "CI/CD"],
      },
      {
        id: "2b",
        title: { en: "A/ IT Senior Specialist", fr: "Spéc. TI senior p.i." },
        period: { en: "Oct 2020 – Mar 2021", fr: "oct. 2020 – mars 2021" },
        description: {
          en: "Acting senior role: led the AWS cloud pathfinder project, infrastructure and capacity planning, technical oversight across horizontal software development workloads, and guidance to senior management.",
          fr: "Rôle de cadre intérimaire : direction du projet pilote cloud AWS, planification de l'infrastructure et de la capacité, supervision technique des charges de travail de développement logiciel transversales, et orientation de la haute direction.",
        },
        tags: ["AWS", "Cloud", "Architecture", "CI/CD"],
      },
      {
        id: "2c",
        title: { en: "DevOps Specialist", fr: "Spécialiste DevOps" },
        period: { en: "Sep 2019 – Mar 2020", fr: "sept. 2019 – mars 2020" },
        description: {
          en: "Key DevOps contributor on a new CRA service enabling low-income Canadians to file tax returns, helping lay the groundwork for the partnership between the Canadian Digital Service and CRA. CI/CD with GitHub Actions, Jenkins and AWS CodePipeline, Docker containerization, IaC with Terraform, deployment on AWS Fargate and Azure, and Java/Spring Boot API development.",
          fr: "Contributeur DevOps clé sur un nouveau service de l'ARC permettant aux Canadiens à faible revenu de produire leurs déclarations de revenus, contribuant à établir les bases du partenariat entre le Service numérique canadien et l'ARC. CI/CD avec GitHub Actions, Jenkins et AWS CodePipeline, conteneurisation Docker, IaC avec Terraform, déploiement sur AWS Fargate et Azure, et développement d'API Java/Spring Boot.",
        },
        tags: ["Docker", "AWS Fargate", "Azure", "Spring Boot", "Terraform", "GitHub Actions"],
      },
      {
        id: "2d",
        title: { en: "IT Analyst / Developer", fr: "Analyste-développeur TI" },
        period: { en: "Dec 2006 – Jan 2016", fr: "déc. 2006 – janv. 2016" },
        description: {
          en: "Nine years of Java application development and IT analysis for core CRA systems.",
          fr: "Neuf ans de développement d'applications Java et d'analyse informatique pour les systèmes principaux de l'ARC.",
        },
        tags: ["Java", "Java EE"],
      },
      {
        id: "2e",
        title: { en: "IT Support Analyst", fr: "Analyste en soutien informatique" },
        period: { en: "Dec 2004 – Dec 2006", fr: "déc. 2004 – déc. 2006" },
        description: {
          en: "IT support and systems administration — the start of a 17-year journey at CRA.",
          fr: "Soutien informatique et administration des systèmes — le début d'un parcours de 17 ans à l'ARC.",
        },
        tags: ["IT Support"],
      },
    ],
  },
]

/* ─── Icons ─────────────────────────────────────────────── */

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function IconMapPinSm() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="11" height="11" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

/* ─── Company group ──────────────────────────────────────── */

function CompanyGroup({ name, totalPeriod, location, roles, lang }) {
  return (
    <div className="company-group">
      <div className="company-header">
        <div className="company-header-left">
          <span className="company-name">{name}</span>
          <span className="company-location">
            <IconMapPinSm />
            {location[lang]}
          </span>
        </div>
        <span className="company-total-period">{totalPeriod[lang]}</span>
      </div>

      <div className="roles-list">
        {roles.map(role => (
          <article key={role.id} className="role-card">
            <div className="role-header">
              <h3 className="role-title">{role.title[lang]}</h3>
              <span className="role-period">{role.period[lang]}</span>
            </div>
            {Array.isArray(role.description[lang]) ? (
              <ul className="role-bullets">
                {role.description[lang].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="role-description">{role.description[lang]}</p>
            )}
            <div className="tags">
              {role.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

/* ─── App ────────────────────────────────────────────────── */

export default function App() {
  const [lang, setLang] = useState('en')
  const t = ui[lang]

  return (
    <div className="page">
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <button
        className="lang-toggle"
        onClick={() => setLang(l => l === 'en' ? 'fr' : 'en')}
        aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}
      >
        {lang === 'en' ? 'FR' : 'EN'}
      </button>

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="avatar-frame">
            <div className="avatar-ring" aria-hidden="true" />
            <img src="/photo.jpg" alt="Charles Morin" className="avatar" />
          </div>

          <h1 className="name">Charles Morin</h1>
          <p className="location-badge">
            <IconMapPin />
            <span>Montreal, Quebec</span>
          </p>

          <p className="tagline">{t.tagline}</p>

          <div className="hero-links">
            <a href={`mailto:${EMAIL}`} className="btn btn-primary">
              <IconMail />
              <span>{EMAIL}</span>
            </a>
            <a href={GITHUB_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <IconGitHub />
              <span>GitHub</span>
            </a>
            <a href={LINKEDIN_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <IconLinkedIn />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span className="scroll-label">{t.scrollLabel}</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── Experience ───────────────────────────────── */}
      <main className="main">
        <div className="container">
          <h2 className="section-label">{t.sectionLabel}</h2>
          {companies.map(co => (
            <CompanyGroup key={co.id} {...co} lang={lang} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Charles Morin</p>
      </footer>
    </div>
  )
}
