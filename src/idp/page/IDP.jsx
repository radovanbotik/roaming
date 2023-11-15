import Hero from "../hero/Hero";

const IDP = () => {
  //my-6

  // mix-blend-multiply blur-xl rounded-full opacity-70
  // mix-blend-multiply blur-xl rounded-full opacity-70
  // mix-blend-multiply blur-xl rounded-full opacity-70

  return (
    <div className="relative container flex-1  text-gray-100 mx-auto ">
      <div className="absolute min-h-screen h-full flex  px-16 top-0 w-full z-0 overflow-hidden">
        <div className="absolute left-40 top-40 w-full h-full max-w-lg">
          <div className="absolute top-0 -left-4 w-[40rem] h-[40rem] bg-purple-300 animate-blob mix-blend-multiply blur-xl rounded-full opacity-70"></div>
          <div className="absolute top-0 -right-4 w-[40rem] h-[40rem] bg-yellow-300 animate-blob animation-delay-2000 mix-blend-multiply blur-xl rounded-full opacity-70"></div>
          <div className="absolute top-40 w-[40rem] h-[40rem] bg-pink-300 animate-blob animation-delay-4000 mix-blend-multiply blur-xl rounded-full opacity-70"></div>
        </div>
      </div>

      <Hero />
    </div>
  );
};

export default IDP;
