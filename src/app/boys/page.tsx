import React from "react";
import data from "../../../data";
import Item from "../(components)/Item";

function page() {
  return (
    <div className="w-11/12 grid grid-cols-1 gap-y-1 gap-x-6 md:grid-cols-2  lg:grid-cols-3 lg:w-3/4 ">
      {data.dataBoys.map((item, index) => {
        return <Item key={item.id} item={item} index={index} />;
      })}
    </div>
  );
}

export default page;
