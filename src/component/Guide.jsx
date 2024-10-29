const Guide = ({ startGame }) => {
  return (
    <div className="absolute inset-0 z-10 flex h-screen items-center justify-center bg-black/40 px-4 tracking-wide">
      <div className="flex w-fit flex-col gap-4 rounded-xl border-8 border-double border-orange-900 bg-orange-50 px-2 py-8 text-orange-900">
        <h3 className="text-center text-3xl">How to play?</h3>
        <ul className="mx-4 flex list-disc flex-col gap-2 text-xl">
          <li>Pick one digimon from the list of the images on display.</li>
          <li>You get a point if you pick a digimon for the first time.</li>
          <li>
            If you pick a digimon that has previosly been picked, the game over.
          </li>
          <li>
            Try your best to avoid duplicate and rack as many points as
            possible.
          </li>
          <li>Good luck, and have fun testing your memory skills!</li>
        </ul>
        <button
          onClick={startGame}
          className="w-fit self-center rounded-xl border-2 border-orange-800 bg-orange-200/90 px-8 py-2 text-2xl font-bold hover:bg-orange-300"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Guide;
