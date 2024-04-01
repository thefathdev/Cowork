import { cva } from "class-variance-authority";

type Testimonial = {
  name: string;
  position: string;
  image: string;
  text: string;
  variant: "primary" | "secondary";
  coord?: string;
};

const testimonies: Testimonial[] = [
  {
    name: "Liam Brown",
    position: "Software Engineer, TechStartup Innovations",
    image: "/img/testimonial-1.png",
    text: "The 24/7 access and secure facilities have been incredibly convenient for my team's flexible schedules. We love the coworking space!",
    variant: "primary",
    coord: "-translate-x-[calc(100%+60px)] translate-y-[30px]",
  },
  {
    name: "Michael Rodriguez",
    position: " Creative Director, DesignCraft Studio",
    image: "/img/testimonial-2.png",
    text: "The aesthetics of Cowork are inspiring. The attention to detail in the design creates an atmosphere that sparks creativity. It's a place where ideas flow effortlessly, and collaboration happens organically.",
    variant: "secondary",
  },
  {
    name: "Michael Thompson",
    position: "Graphic Designer, DesignCo",
    image: "/img/testimonial-3.png",
    text: "As a freelance designer, I was getting tired of working from home or coffee shops. The coworking space has provided me with a productive and professional environment to focus on my work.",
    variant: "primary",
    coord: "translate-x-[calc(100%+60px)] translate-y-[40px]",
  },
  {
    name: "David Wilson",
    position: "Project Manager, SoftwareSolutions LLC",
    image: "/img/testimonial-4.png",
    text: "The coworking space has been a wonderful resource for my team. The open floor plan and dedicated private offices allow us to collaborate and concentrate as needed.",
    variant: "secondary",
    coord: "-translate-x-[calc(50%+60px)] translate-y-[calc(100%+75px)]",
  },
  {
    name: "Alex Nguyen",
    position: "Marketing Consultant, Maverick Marketing",
    image: "/img/testimonial-5.png",
    text: "The flexible membership options and amenities like high-speed internet, printers, and meeting rooms have made this coworking space a perfect fit for my small business.",
    variant: "primary",
    coord: "translate-x-[calc(50%+5px)] translate-y-[calc(100%+110px)]",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="flex flex-col px-4 py-18 max-sm:py-12">
      <div className="flex flex-col rounded-[2rem] max-sm:rounded-[1.5rem] gap-8 max-sm:gap-6 bg-rigid-black">
        <div className="grid items-end w-full grid-cols-12 gap-4 p-8 pt-18 text-clear-white max-sm:flex max-sm:flex-col max-sm:p-6 max-sm:items-start">
          <h2 className="sr-only">Virtual Tour</h2>
          <div className="flex flex-col col-span-9 heading-1 ">
            <span className="flex items-end gap-4">
              <span>Hear It From</span>
              <img
                aria-hidden
                src="/img/testimonials-icon.svg"
                alt=""
                className="-translate-y-[10px] max-sm:scale-50 max-sm:translate-y-[5px] max-sm:-translate-x-[20px]"
              />
            </span>
            <span>Our Client</span>
          </div>
          <div className="flex flex-col col-span-3 gap-2 ml-auto text-clear-white max-sm:ml-0">
            <div className="h-[1px] w-[200px] bg-clear-white"></div>
            <p className="heading-3">Cowork in Words</p>
          </div>
        </div>
        <div className="w-full h-[860px] overflow-hidden relative flex flex-col items-center max-sm:hidden">
          {testimonies.map((testimony, index) => (
            <div
              key={index}
              className={"absolute w-[360px] top-0 " + testimony.coord}
            >
              <TestimonialCard
                name={testimony.name}
                position={testimony.position}
                image={testimony.image}
                text={testimony.text}
                variant={testimony.variant}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-end gap-4">
            <button>
              <span className="sr-only">Previous</span>
            </button>
            <button>
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div className="flex gap-6 overflow-x-scroll pb-6">
            <div aria-hidden className="w-6"></div>
            {testimonies.map((testimony, index) => (
              <div key={index} className="min-w-[300px]">
                <TestimonialCard
                  name={testimony.name}
                  position={testimony.position}
                  image={testimony.image}
                  text={testimony.text}
                  variant={testimony.variant}
                />
              </div>
            ))}
            <div aria-hidden className="w-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

type TestimonialCardProps = {
  name: string;
  position: string;
  image: string;
  text: string;
  variant: "primary" | "secondary";
  coord?: string;
};

const testimonialCardVariant = cva([], {
  variants: {
    variant: {
      primary: "bg-flexing-blue text-clear-white",
      secondary: "bg-tammed-yellow text-rigid-black",
    },
  },
});

function TestimonialCard({
  name,
  position,
  image,
  text,
  variant,
}: TestimonialCardProps) {
  return (
    <div
      className={
        "flex flex-col items-center gap-6 p-8 rounded-[1.5rem] max-sm:rounded-[1rem] max-sm:py-4 max-sm:px-6 max-sm:w-full" +
        " " +
        testimonialCardVariant({ variant })
      }
    >
      <img src={image} alt="name" className="rounded-full size-14" />
      <p className="paragraph">{text}</p>
      <div className="flex flex-col items-center gap-4">
        <p className="subtitle">{name}</p>
        <p className="paragraph-small">{position}</p>
      </div>
    </div>
  );
}
