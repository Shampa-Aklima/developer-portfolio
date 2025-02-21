import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import portfolioData from '../data/portfolio.json';

export default function Home() {
  return (
    <>
      <Header navigation={portfolioData.navigation} />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
        <section id="home">
          <Hero personalInfo={portfolioData.personalInfo} />
        </section>
        <section id="about">
          <About about={portfolioData.about} />
        </section>
        <section id="skills">
          <Skills skills={portfolioData.skills} />
        </section>
        <section id="projects">
          <Projects projects={portfolioData.projects} />
        </section>
      </main>
      <Footer 
        personalInfo={portfolioData.personalInfo}
        footer={portfolioData.footer}
      />
    </>
  );
}
