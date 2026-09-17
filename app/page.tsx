import { NavbarComponent } from './components/NavbarComponent'
import HeroV2Component from './components/HeroV2Component'
import SkillsMatrixComponent from './components/SkillsMatrixComponent'
import ExperienceTimelineComponent from './components/ExperienceTimelineComponent'
import ProjectsV2Component from './components/ProjectsV2Component'
import SAASShowcaseComponent from './components/SAASShowcaseComponent'
import DataAnalyticsComponent from './components/DataAnalyticsComponent'
import AIProjectsComponent from './components/AIProjectsComponent'
import { ContactMeConponent } from './components/ContactMeComponent'
import { FooterComponent } from './components/FooterComponent'
import { ScrollToTopComponent } from './components/ScrollToTopComponent'
import { getHomePageData } from './lib/sanityQueries'

export default async function Home() {
  const {
    skills,
    experiences,
    projects,
    saasProducts,
    dataProjects,
    aiProjects,
  } = await getHomePageData()

  return (
    <main className="min-h-screen">
      <NavbarComponent />
      <HeroV2Component
        name="Boubacar Ba"
        roles={[
          'Business Systems Specialist',
          2000,
          'Web Developer',
          2000,
          'Data Analyst',
          2000,
          'SAAS Builder',
          2000,
        ]}
        bio="Business Systems Specialist with 5+ years bridging business operations and technology. I build full-stack solutions, translate strategic objectives into working software, and act as the liaison between business units and technical teams."
        profileImage="/profile.jpg"
        githubUrl="https://github.com/Boubacar-Beuzy-Ba"
        linkedinUrl="https://www.linkedin.com/in/boubacar-ba-491246145/"
        email="bouba0178@gmail.com"
        resumeUrl="/Boubacar Resume CSM & Web.pdf"
      />

      <SkillsMatrixComponent skills={skills} />

      <ExperienceTimelineComponent experiences={experiences} />

      <ProjectsV2Component projects={projects} />

      {saasProducts.length > 0 && <SAASShowcaseComponent products={saasProducts} />}

      {dataProjects.length > 0 && <DataAnalyticsComponent projects={dataProjects} />}

      {aiProjects.length > 0 && <AIProjectsComponent projects={aiProjects} />}

      <ContactMeConponent />

      <FooterComponent />
      <ScrollToTopComponent />
    </main>
  )
}
