import HeroTexts from "./hero-texts";

export default function HeroSection() {
  return (
    <main className="grid items-center w-full grid-cols-12 gap-4 px-4 py-12 max-sm:py-6 max-sm:flex max-sm:flex-col max-sm:gap-4">
      <HeroTexts />
      <div className="w-full min-h-[640px] max-sm:h-80 max-sm:min-h-[0px] h-full col-span-4 overflow-hidden rounded-[2rem] max-sm:rounded-[1.5rem]">
        <img
          src="/img/hero.jpg"
          alt=""
          className="object-cover h-full max-sm:w-full"
        />
      </div>
    </main>
  );
}
