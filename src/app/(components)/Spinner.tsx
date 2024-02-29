import React from "react";
import Image from "next/image";
function Spinner() {
  return (
    <div className="w-full h-full pb-96 flex justify-center items-center">
      <Image
        className="w-16 h-16 mt-10 "
        src="/images/loader.gif"
        height={50}
        width={50}
        alt="loader gif"
      />
    </div>
  );
}

export default Spinner;
