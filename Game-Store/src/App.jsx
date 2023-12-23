import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [theme,setTheme]=useState('dark');
  return (
    <div className={`${theme} ${theme=='dark'? 'bg-yellow-200':null}`}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
