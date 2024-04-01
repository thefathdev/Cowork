import Button from "../ui/button";

export default function CtaSection() {
  return (
    <section className="flex flex-col px-4 py-18 max-sm:py-12">
      <div className="flex flex-col items-center rounded-[2rem] py-18 px-8 max-sm:p-6 max-sm:rounded-[1.5rem] gap-12 bg-rigid-black">
        <div className="flex flex-col gap-6 items-center">
          <h2 className="sr-only">Seize The Moment - Join Cowork Today!</h2>
          <div
            aria-hidden
            className="heading-1 text-clear-white flex flex-wrap justify-center gap-x-6 gap-y-3 max-sm:gap-y-0 max-sm:gap-x-4"
          >
            <span>Seize</span>
            <img
              src="/img/cta-in-text.jpg"
              alt=""
              className="w-[240px] rounded-full max-sm:w-[160px]"
            />
            <span className="text-center">The Moment - </span>
            <span className="text-center">Join Cowork Today!</span>
          </div>
          <p className="max-w-[640px] text-center text-clear-white">
            Uncover the transformative power of Cowork as echoed by those
            who&apos;ve made it their professional haven. This is more than
            finding a desk; it&apos;s discovering a community that fuels your
            journey to success.
          </p>
        </div>
        <Button size={"big"} type={"accent"}>
          Claim Your Spot
        </Button>
      </div>
    </section>
  );
}
