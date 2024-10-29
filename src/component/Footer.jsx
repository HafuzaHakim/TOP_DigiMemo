import github from "../asset/github.png";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-2 py-1 backdrop-blur-md">
      <a href="https://github.com/HafuzaHakim/TOP_DigiMemo" className="w-6">
        <img src={github} alt="" className="block w-full" />
      </a>
      <p className="text-lg tracking-wide">
        Created by <span className="text-yellow-200">Hafuza</span>
        <span className="text-blue-600">Hakim</span>
      </p>
    </footer>
  );
};

export default Footer;
