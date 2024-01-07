import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../services/GlobalApi";
import Hero_Banner from "../components/Hero_Banner";

const Home = () => {
  const [allgamelist, setAllGameList] = useState([]);
  useEffect(() => {
    getAllGamesList();
  });
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      console.log(resp.data.results);
      setAllGameList(resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="h-full hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allgamelist?.length > 0 ? (
          <Hero_Banner gamebanner={allgamelist[0]} />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
