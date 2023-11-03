import List from "../list/List";
import Form from "./Form";
import { useState } from "react";
import destinationsData from "../destinationsData";
import Modal from "../modal/Modal";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [open, setOpen] = useState(true);
  const findCountry = userSearch => {
    const result = destinationsData.find(country => {
      //   return country.country === userSearch;
      return country.country.toLowerCase().startsWith(userSearch.trim().toLowerCase());
    });
    setDestination(result);
  };

  console.log(destinationsData);

  return (
    <section className="bg-gray-800 text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 md:py-24 md:px-10 lg:px-24 xl:max-w-3xl">
        <div>
          <h1 className="text-4xl text-center font-bold leading-none sm:text-5xl">
            AT&T
            <span className="text-yellow-400 block">International Day Pass®</span>destinations
          </h1>
          <p className="px-8 mt-8 mb-12 text-center text-lg">
            Find out where you can use International Day Pass, or other qualified add-ons outside of the U.S.
          </p>
        </div>
        <Form findCountry={findCountry} setOpen={setOpen} />
        {destination && <Modal destination={destination} open={open} setOpen={setOpen} />}
      </div>
      <List setDestination={setDestination} setOpen={setOpen} />
    </section>
  );
};

export default Hero;
