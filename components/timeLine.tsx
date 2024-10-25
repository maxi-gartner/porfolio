import { dataAboutPage } from "@/data";

const TimeLine = () => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200 pb-12">
      <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
        <div className="-my-6">
          {dataAboutPage.map((data) => (
            <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
              <h3 className="mb-1 text-2xl font-bold sm:mb-0 flex gap-2 max-w-xs md:max-w-6xl md:mb-2">
                {data.title}
              </h3>
              <div
                className="flex flex-col sm:flex-row items-start mb-1 
                                        group-last:before:hidden before:absolute 
                                        before:left-2 sm:before:left-0 before:h-full
                                        before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] 
                                        before:self-start before:-translate-x-1/2 
                                        before:translate-y-3 after:absolute after:left-2 
                                        sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-600 
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
                                        after:translate-y-1.5"
              >
                <div className="flex w-full gap-4">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-24 h-8 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    {data.date}
                  </time>
                </div>
                <div className="text-xl font-bold text-gray-300 flex gap-2">
                  {data.subtitle}{" "}
                  {data.icons.map((icon, index) => (
                    <span key={index} className="text-2xl">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-slate-300 max-w-xs">{data.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
