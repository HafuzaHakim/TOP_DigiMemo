const Score = ({ score, bestScore }) => {
  return (
    <div className="px-4">
      <div className="ml-auto w-fit rounded-xl border-8 border-double border-orange-900 bg-orange-50 px-6 py-3 text-2xl text-orange-900">
        <div>
          <span>Score :</span>
          <span className="text-yellow-700">{score}</span>
          <span>/12</span>
        </div>
        <div>
          <span>Best Score :</span>
          <span className="text-yellow-700">{bestScore}</span>
        </div>
      </div>
    </div>
  );
};

export default Score;
