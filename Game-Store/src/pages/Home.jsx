import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../services/GlobalApi";
import Hero_Banner from "../components/Hero_Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenres from "../components/GamesByGenres";

const Home = () => {
  const [allgamelist, setAllGameList] = useState([]);
  const [gamelistbygenre,setGameListByGenre]=useState([]);
  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId();
  });
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      // console.log(resp.data.results);
      setAllGameList(resp.data.results);
    });
  };
  const getGameListByGenreId=(id)=>{
    GlobalApi.getGameListByGenreId(6).then((resp)=>{
      // console.log("Game list by genre id",resp.data.results);
      setGameListByGenre(resp.data.results);
    })

  }
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="h-full hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allgamelist?.length > 0&&gamelistbygenre.length>0 ? (
          <div>
            <Hero_Banner gamebanner={allgamelist[0]} />
            <TrendingGames gamelist={allgamelist} />
            <GamesByGenres gamelistbygenre={gamelistbygenre} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
