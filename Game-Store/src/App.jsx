import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ThemeContext } from "./Context/ThemeContext";
import Lottie from "lottie-react";
import loader from "./assets/images/loader-2.json";

function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {loading ? (
        <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-300 via-slate-600 to-black h-screen w-screen flex items-center justify-center">
          <Lottie animationData={loader} loop={true} className="h-72 w-72" />
        </div>
      ) : (
        <div
          className={`${theme} ${
            theme == "dark" ? "bg-black" : "bg-gradient-to-r from-rose-300 to-teal-300"
          } min-h-[100vh] `}
        >
          <Header />
          <Home />
        </div>
      )}
    </ThemeContext.Provider>
  );
}

export default App;
