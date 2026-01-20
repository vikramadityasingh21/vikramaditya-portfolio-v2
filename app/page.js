import Header from './components/Header';
import Hero from './components/Hero';
import LogoShowcase from './components/LogoShowcase';
import SelectedExperience from './components/SelectedExperience';
import ProblemSpace from './components/ProblemSpace';
import FeaturedWork from './components/FeaturedWork';
import CorePrinciples from './components/CorePrinciples';
import EducationPreview from './components/EducationPreview';
import LatestInsights from './components/LatestInsights';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LogoShowcase />
        <SelectedExperience />
        <ProblemSpace />
        <FeaturedWork />
        <CorePrinciples />
        <EducationPreview />
        <LatestInsights />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
