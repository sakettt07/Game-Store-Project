import axios from "axios";
const key="2093bdb980944986bbdb42b3e56712e2";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
});
const getGenreList=axiosCreate.get('/genres?key='+key);
export default{
    getGenreList
}