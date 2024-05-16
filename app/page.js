import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import ProjectSection from "./component/ProjectSection";
import EmailSection from "./component/EmailSection";
import Footer from "./component/Footer";
import AchievementsSection from "./component/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
