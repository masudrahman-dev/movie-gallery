import MovieCard from "../components/MovieCard/MovieCard";

const axios = require("axios");
let data;
const options = {
  method: "GET",
  url: "https://moviesdatabase.p.rapidapi.com/titles",
  headers: {
    "X-RapidAPI-Key": "90026dc54fmsh699eee8596dc593p1792d1jsn78c10d697249",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

try {
  const res = await axios.request(options);

  data = res.data.results;
  // console.log(Array.isArray(data));
} catch (error) {
  console.error(error);
}
const Page = () => {
  return (
    <section>
      <h2>Movies</h2>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 flex-wrap">
        {data.map((movie) => (
          <MovieCard key={movie.id} movies={movie}></MovieCard>
        ))}
      </div>
    </section>
  );
};

export default Page;
