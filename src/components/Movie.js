import propTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <h1>Movies...</h1>

      <div>
        <div>
          <img src={medium_cover_image} alt={medium_cover_image} />
          <Link to="/movie">title : {title}</Link>
          <p>{summary}</p>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
Movie.propTypes = {
  medium_cover_image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};
export default Movie;
