function Hero() {
  return (
    <div className="bg-black/20 h-full text-white">
      <div className="h-full flex justify-center items-center">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <div className="space-y-4 lg:pr-36">
            <h1 className="text-5xl font-bold">
              Orbite The Earth with Cozy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              dolores quis, repellendus, sunt, itaque eaque tempora alias cumque
              aliquam dolor tenetur illo accusamus saepe? Architecto ullam
              quisquam nesciunt recusandae aut.
            </p>
            <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">
              Learn More
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
