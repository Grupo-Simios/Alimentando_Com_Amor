import { IoIosMenu } from "react-icons/io";

export const Home = () => {
  return (
    <div className="flex h-full">
      <header className="flex  w-[100%] ml-auto h-fit justify-end relative  px-4 pt-10">
        <h1 className="uppercase absolute flex  flex-col items-center top-10 bottom-0 right-0 left-0 text-3xl ">
          Alimentando <br />
          <span className="uppercase text-[#FF9F1C]">com amor</span>
        </h1>
        <IoIosMenu size={"32px"} />
      </header>
    </div>
  );
};
