import PinCard from "./PinCard";

const PinList = async () => {
  const fetchPins = await fetch(`http://localhost:3000/api/pin`, {
    cache: "no-store",
  });

  const pins = await fetchPins.json();

  return (
    <div className="grid grid-cols-4 gap-4 my-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      {pins.map((pin) => (
        <PinCard key={pin.id} pin={pin} />
      ))}
    </div>
  );
};

export default PinList;
