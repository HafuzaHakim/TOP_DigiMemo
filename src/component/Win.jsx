import winner from "../asset/win.gif";

const Win = ({ onWin }) => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
      <div className="mx-2 flex flex-col items-center gap-6 rounded-xl border-8 border-double border-orange-900 bg-orange-50 px-4 py-3 text-center text-orange-900">
        <h3 className="text-4xl">You win!!!</h3>
        <div className="flex max-w-[300px] justify-center">
          <img
            src={winner}
            alt=""
            className="block aspect-square w-2/3 object-cover"
          />
        </div>
        <p className="text-xl">
          Congratulations! You have obtained the full score!
        </p>
        <button
          onClick={onWin}
          className="w-fit self-center rounded-xl border-2 border-orange-800 bg-orange-200/90 px-8 py-2 text-xl font-bold hover:bg-orange-300"
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default Win;
