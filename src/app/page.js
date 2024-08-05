import About from "@/components/About";
import AchievementsSection from "@/components/AchievementsSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import MyProjects from "@/components/MyProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
        <HeroSection />
      </header>
      <main className="min-h-screen">
        <AchievementsSection />
        <About id="about"/>
        <MyProjects id="projects"/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
