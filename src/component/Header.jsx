import logo from "../asset/logo.png";

const Header = () => {
  return (
    <header className="container mx-auto flex w-fit items-center justify-center gap-4 rounded-3xl px-8 py-2 tracking-wide backdrop-blur-md">
      <div className="w-20">
        <img src={logo} alt="" className="block w-full" />
      </div>
      <h1 className="text-6xl text-yellow-200">
        Digi<span className="text-blue-600">Memo</span>
      </h1>
    </header>
  );
};

export default Header;
