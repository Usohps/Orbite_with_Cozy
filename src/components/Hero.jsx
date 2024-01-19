import Mountainpng from "../assets/pngegg.png";

function Hero() {
  return (
    <div className="bg-black/20 h-full text-white">
      <div className="h-full flex justify-center items-center">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <div data-aos="fade-up" className="space-y-6 lg:pr-36">
            <h1 className="text-5xl font-bold">Orbite The Earth with Cozy</h1>
            <p data-aos="fade-down" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              dolores quis, repellendus, sunt, itaque eaque tempora alias cumque
              aliquam dolor tenetur illo accusamus saepe? Architecto ullam
              quisquam nesciunt recusandae aut.
            </p>
            <button data-aos="fade-down" data-aos-delay="500" className="primary-button">Learn More</button>
          </div>
          <div></div>
        </div>
      </div>
      <img
        src={Mountainpng}
        alt="mountain.png"
        className="absolute right-0 bottom-0 w-full brightness-50 z-[-1]"
      />
    </div>
  );
}

export default Hero;
