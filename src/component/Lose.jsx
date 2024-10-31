import loser from "../asset/lose.gif";

const Lose = ({ score, onLose }) => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
      <div className="mx-2 flex max-w-[340px] flex-col items-center gap-6 rounded-xl border-8 border-double border-orange-900 bg-orange-50 px-4 py-3 text-center text-orange-900">
        <h3 className="text-4xl">You lost...</h3>
        <div className="flex max-w-[300px] justify-center">
          <img
            src={loser}
            alt=""
            className="block aspect-square w-2/3 object-cover"
          />
        </div>
        <p className="text-xl">
          Ooofff..tough luck, your final score is{" "}
          <span className="font-bold">{score}</span>
        </p>
        <button
          onClick={onLose}
          className="w-fit self-center rounded-xl border-2 border-orange-800 bg-orange-200/90 px-8 py-2 text-xl font-bold hover:bg-orange-300"
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default Lose;
