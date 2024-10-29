import { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div className="background relative flex h-screen flex-col pt-2">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
