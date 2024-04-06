import HeroImagery from "./hero-imagery";
import HeroTexts from "./hero-texts";

export default function HeroSection() {
  return (
    <main className="grid items-center w-full grid-cols-12 gap-4 px-4 py-12 max-sm:py-6 max-sm:flex max-sm:flex-col max-sm:gap-4">
      <HeroTexts />
      <HeroImagery />
    </main>
  );
}
