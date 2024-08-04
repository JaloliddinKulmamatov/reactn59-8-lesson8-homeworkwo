import About from "@/components/About";
import AchievementsSection from "@/components/AchievementsSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

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

      </main>
    </>
  );
}
