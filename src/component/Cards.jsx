import Tilt from "react-parallax-tilt";

const Cards = ({ digimons, selectedDigimon }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {digimons.map((digimon) => (
        <Tilt
          scale={1.05}
          glareEnable={true}
          key={digimon.id}
          className="basis-[45%] md:basis-[25%] lg:basis-[17%]"
        >
          <img
            id={digimon.id}
            src={digimon.image}
            alt={digimon.name}
            className="block w-full rounded-xl border-8 border-double border-yellow-200"
          />
        </Tilt>
      ))}
    </div>
  );
};

export default Cards;

("grid cursor-pointer auto-rows-min grid-cols-2 gap-6 overflow-auto p-2 sm:grid-cols-4");
