const Guide = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-black/40">
      <div className="mx-4 flex w-fit flex-col gap-4 rounded-xl border-8 border-double border-orange-900 bg-orange-50 px-2 py-8 text-orange-900">
        <h3 className="text-center text-4xl">DigiMemo Guide</h3>
        <ul className="mx-4 flex list-disc flex-col gap-2 text-xl">
          <li>Pick one digimon from the list of the provided images.</li>
          <li>
            You get a point if pick the image for the first time, otherwise it
            is game over.
          </li>
          <li>
            Try your best to avoid duplicate and racking as many points as
            possibel.
          </li>
          <li>Good luck, and have fun testing your memory skills!</li>
        </ul>
        <button className="w-fit self-center rounded-xl border-2 border-orange-800 bg-orange-200/90 px-8 py-2 text-3xl font-bold hover:bg-orange-300">
          Start
        </button>
      </div>
    </div>
  );
};

export default Guide;
