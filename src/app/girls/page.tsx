import React from "react";
import data from "../../../data";
import Item from "../(components)/Item";

function page() {
  return (
    <div className="w-11/12 grid grid-cols-1 gap-y-1 gap-x-6 md:grid-cols-2 lg:w-2/3 ">
      {data.dataGirls.map((item, index) => {
        return <Item key={item.id} item={item} index={index} />;
      })}
    </div>
  );
}

export default page;
