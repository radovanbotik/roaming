import React from "react";
import Table from "./Table";

const List = props => {
  const { setDestination, setOpen } = props;
  return (
    <section className=" text-gray-100 ">
      {/* add container */}
      <div className="relative container mx-auto flex flex-col items-center px-4 py-4 md:py-8 md:px-10 lg:px-8 lg:max-w-6xl xl:max-w-6xl z-10">
        <Table setDestination={setDestination} setOpen={setOpen} />
      </div>
    </section>
  );
};

export default List;
