import data from "../../data";
import Item from "./(components)/Item";

export default function Home() {
  const allData = [...data.dataGirls, ...data.dataBoys];

  return (
    <div className="w-11/12 grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  lg:w-10/12 ">
      {allData.map((item, index) => {
        return <Item key={item.id} item={item} index={index} />;
      })}
    </div>
  );
}
