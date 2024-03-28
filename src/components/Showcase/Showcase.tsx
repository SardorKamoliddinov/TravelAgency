import CustomTabs from "../Tabs";

const Showcase = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col pt-[150px]">
        <h1 className="text-7xl text-white w-2/3 text-center font-bold my-6">
          It Matters Who You Travel With
        </h1>
        <div className="w-9/12 h-64 bg-white rounded-2xl py-4 px-10">
          <CustomTabs />
        </div>
      </div>
    </>
  );
};

export default Showcase;
