import logo from "../asset/logo.png";

const Header = () => {
  return (
    <header className="container mx-auto flex w-fit items-center justify-center gap-4 rounded-3xl border-4 border-yellow-200 px-8 py-2 tracking-wide backdrop-blur-sm">
      <div className="w-20">
        <img src={logo} alt="" className="block w-full" />
      </div>
      <h1 className="bg-gradient-to-r from-blue-600 to-yellow-200 bg-clip-text text-6xl text-transparent">
        DigiMemo
      </h1>
    </header>
  );
};

export default Header;
