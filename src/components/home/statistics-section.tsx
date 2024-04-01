type Statistics = {
  amount: string;
  title: string;
};

const statistics: Statistics[] = [
  { amount: "240%", title: "Community Growth" },
  { amount: "99%", title: "Technology Uptime" },
  {
    amount: "50+",
    title: "Happy Members",
  },
  {
    amount: "100%",
    title: "Renewable Energy Sources",
  },
];

export default function StatisticsSection() {
  return (
    <section className="relative flex px-4 py-[820px] items-center gap-8 max-sm:pt-[480px] max-sm:pb-18 max-sm:flex-col overflow-x-hidden">
      <div className="relative z-10 flex flex-col w-full gap-8 text-flexing-blue">
        <div className="flex flex-col gap-4">
          <p className="subtitle ">Cowork in Numbers</p>
          <h2 className="heading-2 ">
            Transformative Statistics That Speak Volumes{" "}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {statistics.map((statistic, index) => (
            <div key={index} className="relative flex flex-col gap-2">
              <p className="relative z-10 heading-2">{statistic.amount}</p>
              <p className="relative z-10 text-rigid-black">
                {statistic.title}
              </p>
              <span className="absolute bottom-0 left-0 translate-x-[150%] -translate-y-[100%] rounded-full size-9 bg-clear-white"></span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 w-full max-h-[640px] max-sm:max-h-[320px] max-w-[640px] h-screen overflow-hidden rounded-[2rem]">
        <img
          src="/img/statistics.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      {/* Decoration */}
      <div className="absolute w-[1600px] max-sm:w-[1240px] rounded-full aspect-square bg-tammed-yellow border-[5px] border-dashed border-flexing-blue -translate-x-1/4 max-sm:-translate-y-[40%]"></div>
    </section>
  );
}
