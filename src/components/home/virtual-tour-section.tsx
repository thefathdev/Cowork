import Button from "../ui/button";

export default function VirtualTourSection() {
  return (
    <section className="flex flex-col px-4 py-18 max-sm:py-12">
      <div className="flex flex-col rounded-[2rem] max-sm:rounded-[1.5rem] gap-8 max-sm:gap-0 bg-flexing-blue">
        <div className="grid items-end w-full grid-cols-12 gap-4 p-8 pt-18 max-sm:p-6 max-sm:flex max-sm:flex-col max-sm:items-start">
          <h2 className="sr-only">Virtual Tour</h2>
          <div className="flex flex-col col-span-7 heading-1 text-clear-white">
            <span>Virtual</span>
            <span className="flex items-end gap-4">
              <span>Tour</span>
              <img
                aria-hidden
                src="/img/virtual-tour-icon.svg"
                alt=""
                className="-translate-y-[5px] max-sm:scale-50 max-sm:translate-y-[5px] max-sm:-translate-x-[20px]"
              />
            </span>
          </div>
          <div className="flex justify-end col-span-5 gap-6 max-sm:hidden">
            <p className=" text-clear-white">
              Our immersive 📺 video tour gives you a sneak peek into the
              vibrant atmosphere that define the Cowork experience.
            </p>
            <div className="flex items-start justify-end flex-none">
              <Button type={"secondary"} size={"big"}>
                Explore Spaces
              </Button>
            </div>
          </div>
        </div>
        <div className="relative w-full max-sm:h-[320px] aspect-video rounded-[2rem] max-sm:rounded-[1.5rem] overflow-hidden">
          <div className="absolute z-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-sm:scale-50">
            <PlayButton />
          </div>
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-0 right-0 z-10 pointer-events-none bg-rigid-black/20 "
          ></div>
          <img
            src="/img/virtual-tour-thumb.jpg"
            alt=""
            className="relative max-sm:object-cover max-sm:h-full"
          />
        </div>
        <div className="flex w-full flex-col gap-6 p-6 sm:hidden">
          <p className=" text-clear-white">
            Our immersive 📺 video tour gives you a sneak peek into the vibrant
            atmosphere that define the Cowork experience.
          </p>
          <div className="flex flex-col w-full">
            <Button type={"secondary"} size={"big"}>
              Explore Spaces
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const PlayButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="128"
    height="103"
    viewBox="0 0 128 103"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.8 0H115.2C122.269 0 128 5.73056 128 12.8V89.6C128 96.6694 122.269 102.4 115.2 102.4H12.8C5.73056 102.4 0 96.6694 0 89.6V12.8C0 5.73056 5.73056 0 12.8 0ZM58.688 71.808L83.584 55.168C84.9254 54.2938 85.7344 52.8013 85.7344 51.2C85.7344 49.5987 84.9254 48.1062 83.584 47.232L58.688 30.592C57.2179 29.5987 55.3203 29.497 53.7523 30.3277C52.185 31.1584 51.2032 32.7859 51.2 34.56V67.84C51.2032 69.6141 52.185 71.2416 53.7523 72.0723C55.3203 72.903 57.2179 72.8013 58.688 71.808Z"
      fill="black"
    />
  </svg>
);
