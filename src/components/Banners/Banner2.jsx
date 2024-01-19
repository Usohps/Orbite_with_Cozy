import Mountain from "../assets/pngeggg.png";
function Banner() {
  return (
    <div className="bg-black text-white pb-12 relative z-50 ">
      <div className="container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="md:w-1/2 w-full">
            <img src={Mountain} alt="mountain" className="h-[200px]" />
          </div>
          <div className="p-4 border-r-sky-800 border-r-2 border-b-2 border-b-sky-800 space-y-3 xl:pr-36">
            <p className="text-sky-800 capitalize ">Our Mission</p>
            <h1 className="capitalize text-5xl">RapidCast</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              labore, rem vero porro debitis veniam laborum aspernatur
              doloremque aperiam libero commodi mollitia eos provident sit
              consequatur, fugiat, illum eaque odit?
            </p>
            <button className="primary-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
