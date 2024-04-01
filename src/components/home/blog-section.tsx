import Button from "../ui/button";

type BlogPost = {
  title: string;
  category: string;
  readingTime: number;
  img: string;
};

const blogs: BlogPost[] = [
  {
    title: "Navigating the Future: Trends in Modern Coworking Spaces",
    category: "Trending",
    readingTime: 7,
    img: "/img/blog-1.jpg",
  },
  {
    title: "Mastering Productivity: Tips from Cowork's High Achievers",
    category: "Productivity",
    readingTime: 5,
    img: "/img/blog-2.jpg",
  },
  {
    title: "Tech Talk: The Backbone of Cowork's Seamless Experience",
    category: "Talk",
    readingTime: 10,
    img: "/img/blog-3.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="flex flex-col items-center gap-12 px-4 py-18 max-sm:py-12">
      {/* Title */}
      <div className="flex flex-col items-center gap-4">
        <p className="subtitle text-flexing-blue">Cowork Chronicles</p>
        <h2 className="sr-only">Insight, Innovation, and Inspiration</h2>
        <div
          aria-hidden
          className="flex flex-wrap justify-center gap-x-3 gap-y-1 heading-2 max-w-[640px] max-sm:gap-y-0"
        >
          <span>Insights, Innovation, and </span>
          <img
            src="/img/blog-in-text.jpg"
            alt=""
            className="w-[180px] rounded-full max-sm:w-[120px]"
          />
          <span>Inspiration</span>
        </div>
      </div>
      <div className="flex flex-col gap-16 max-sm:gap-8">
        {/* Blogs */}
        <div className="grid w-full grid-cols-3 gap-4 max-sm:flex max-sm:flex-col max-sm:gap-8">
          {blogs.map((blog, index) => (
            <article key={index} className="flex flex-col gap-6 max-sm:gap-4">
              <img
                src={blog.img}
                alt=""
                className="rounded-[1.5rem] aspect-[3/2] w-full"
              />
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <span className="px-2 py-1 border border-rigid-black paragraph-strong text-sm rounded-[0.5rem]">
                    {blog.category}
                  </span>
                  <p className="text-center">{blog.readingTime} mins read</p>
                </div>
                <h1 className="heading-3 capitalize">{blog.title}</h1>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center">
          <Button>View All</Button>
        </div>
      </div>
    </section>
  );
}
