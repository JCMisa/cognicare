import DataCard from "./DataCard";

const DataCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      <DataCard />
      <DataCard />
      <DataCard />
    </div>
  );
};

export default DataCards;
