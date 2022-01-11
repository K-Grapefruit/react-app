import propTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "../Movie.module.css";
function Movie({ id, medium_cover_image, title, description_full, genres }) {
  console.log(genres);
  return (
    <div>
      <div className={style.content}>
        <img src={medium_cover_image} alt={medium_cover_image} />
        <h2 className={style.link}>
          <Link to={`/movie/${id}`}> {title}</Link>
        </h2>
        <p>
          {description_full && description_full.length > 235
            ? `${description_full.slice(0, 235)}...`
            : description_full}
        </p>
        <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: propTypes.number.isRequired,
  medium_cover_image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description_full: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};
export default Movie;
