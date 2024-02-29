import React from "react";
import Image from "next/image";

type ItemType = {
  id: string;
  img: string;
  name: string;
  birthday: string;
  gifts: string[];
};

type Props = {
  item: ItemType;
  index: number;
};

function Item({ item, index }: Props) {
  return (
    <div
      className={`mb-2 p-1 flex gap-4 text-xs ${
        index % 2 === 0 ? "bg-blue-300/30" : "bg-violet-300/30"
      } rounded-sm `}
    >
      <div>
        <Image
          src={item.img}
          className="w-10 lg:w-14"
          width={50}
          height={50}
          alt="image of NAME character"
          priority={true}
        />
      </div>
      <div className=" w-1/5 flex flex-col justify-around items-center text-white">
        <p>{item.name}</p>

        <p className="text-violet-200">{item.birthday}</p>
      </div>
      <div className="flex items-center gap-2 ">
        {item.gifts.map((gift: string, index: number) => {
          return (
            <Image
              src={gift}
              className="w-8 h-8 lg:w-10 lg:h-10"
              width={50}
              height={50}
              alt={`Picture of ${item.name}'s favorite gift`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Item;
