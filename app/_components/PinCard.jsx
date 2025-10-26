import Delete from "./Delete";

const PinCard = ({ pin }) => {
  return (
    <div className="w-full dark:bg-slate-800 md:min-w-[60%] md:max-w-[90%] relative bg-white boxShadow rounded-xl flex-col sm:flex gap-[20px] p-4">
      <div className="w-full mt-5 sm:mt-0">
        <div className="flex sm:items-center justify-between w-full">
          <div className="flex sm:flex-row flex-col sm:items-center sm:gap-[5px]">
            <h1 className="text-[1.2rem] dark:text-[#abc2d3] font-bold">
              {pin.title}
            </h1>
          </div>
          <Delete pinId={pin.id} pinTitle={pin.title} />
        </div>

        <p className="text-gray-600 mt-3 dark:text-[#abc2d3]/90 text-[0.9rem]">
          {pin.description}
        </p>
        <p className="text-gray-600 mt-3 dark:text-[#abc2d3]/90 text-[0.9rem]">
          {pin.type}
        </p>
        <p className="text-gray-600 mt-3 dark:text-[#abc2d3]/90 text-[0.9rem]">
          {pin.content}
        </p>
      </div>
    </div>
  );
};

export default PinCard;
