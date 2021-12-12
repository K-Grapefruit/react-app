import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import Movie from "../components/Movie";

function Detail() {
  const [movie, Setmovie] = useState("");
  const [loading, Setloading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    Setmovie(json);
    Setloading(false);
  };
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <Movie
          id={id}
          medium_cover_image={movie.data.movie.medium_cover_image}
          title={movie.data.movie.title}
          summary={movie.data.movie.description_full}
          genres={movie.data.movie.genres}
        />
      )}
    </div>
  );
}
export default Detail;
