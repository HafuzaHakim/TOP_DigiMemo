import Tilt from "react-parallax-tilt";

const Cards = ({ digimons, selectedDigimon, handleClick }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 overflow-auto p-4">
      {digimons.map((digimon) => (
        <Tilt
          scale={1.05}
          glareEnable={true}
          key={digimon.id}
          className="basis-[45%] cursor-pointer md:basis-[23%] lg:basis-[17%]"
        >
          <img
            id={digimon.id}
            src={digimon.image}
            alt={digimon.name}
            className="block w-full rounded-xl border-8 border-double border-yellow-200"
            onClick={() => handleClick(digimon.id)}
          />
        </Tilt>
      ))}
    </div>
  );
};

export default Cards;
