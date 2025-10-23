import AddPin from "./_components/Add-pin";
import ArrangePin from "./_components/Arrange-pin";
import PinList from "./_components/Pin-list";

export default function Home() {
  return (
    <div>
      <div className="flex justify-end mx-2">
        <ArrangePin />
        <AddPin />
      </div>
      <PinList />
    </div>
  );
}
