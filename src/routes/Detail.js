import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Detail() {
  const [movie, Setmovie] = useState("");
  const [loading, Setloading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    Setmovie(json.data.movie);
    Setloading(false);
  };
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <Movie
          key={movie.id}
          id={id}
          medium_cover_image={movie.medium_cover_image}
          title={movie.title}
          description_full={movie.description_full}
          genres={movie.genres}
        />
      )}
    </div>
  );
}
export default Detail;
