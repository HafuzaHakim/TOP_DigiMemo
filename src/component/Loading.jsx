import loading from "../asset/loading.png";

const Loading = () => {
  return (
    <div className="flex h-full content-center items-center">
      <div className="mx-auto flex w-fit flex-col items-center rounded-3xl border-8 border-double border-orange-900 bg-orange-50 px-16 py-4">
        <div className="spin w-20">
          <img src={loading} alt="" className="block w-full" />
        </div>
        <p className="text-2xl text-orange-800">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
