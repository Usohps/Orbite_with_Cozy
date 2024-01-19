import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import Wave from "../../assets/wave.gif";
function Services() {
  const ServiceData = [
    {
      title: "HST",
      content: "300-1500km",
      desc: "Used for astronomical observations,capturing stunning images of the universe",
      icons: <FaSpaceAwesome className="text-7xl" />,
      aosDelay: "500",
    },
    {
      title: "HST",
      content: "300-1500km",
      desc: "Used for astronomical observations,capturing stunning images of the universe",
      icons: <FaShuttleSpace className="text-7xl" />,
      aosDelay: "500",
    },
    {
      title: "HST",
      content: "300-1500km",
      desc: "Used for astronomical observations,capturing stunning images of the universe",
      icons: <FaReact className="text-7xl" />,
      aosDelay: "500",
    },
    {
      title: "HST",
      content: "300-1500km",
      desc: "Used for astronomical observations,capturing stunning images of the universe",
      icons: <FaShuttleSpace className="text-7xl" />,
      aosDelay: "500",
    },
    {
      title: "HST",
      content: "300-1500km",
      desc: "Used for astronomical observations,capturing stunning images of the universe",
      icons: <FaShuttleSpace className="text-7xl" />,
      aosDelay: "500",
    },
    {
      title: "HST",
      content: "300-1500km",
      desc: "Used for astronomical observations,capturing stunning images of the universe",
      icons: <FaShuttleSpace className="text-7xl" />,
      aosDelay: "500",
    },
  ];
  return (
    <div className="bg-black text-white relative z-15">
      <div className="container">
        <div className="min-h-[400px]">
          <div className="grid gid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {ServiceData.map((data, index) => (
              <>
                <div key={index} data-aos="fade-down" data-aos-delay={data.aosDelay} className="min-h-[180px] gap-2 flex flex-col justify-center text-center items-center rounded-xl bg-sky-900/60 backdrop-blur-sm text-2xl py-8 px-3 w-full lg:w-[300px] m-auto">
                  {data.icons}
                  <h1>{data.title}</h1>
                  <p>{data.content}</p>
                  <p className="text-sm">{data.desc}</p>
                </div>
              </>
            ))}

            <img
              src={Wave}
              alt="wave.gif"
              className="w-full h-[200px] object-cover mix-blend-screen -translate-y-24 absolute  md:top-[50%] bottom-0 md:left-[0] z-[-1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
