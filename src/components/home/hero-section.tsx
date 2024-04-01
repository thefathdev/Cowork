import HeroTexts from "./hero-texts";

export default function HeroSection() {
  return (
    <main className="grid items-center w-full grid-cols-12 gap-4 px-4 py-12">
      <HeroTexts />
      <div className="w-full min-h-[640px] h-full col-span-4 overflow-hidden rounded-[2rem]">
        <img src="/img/hero.jpg" alt="" className="object-cover h-full" />
      </div>
    </main>
  );
}
