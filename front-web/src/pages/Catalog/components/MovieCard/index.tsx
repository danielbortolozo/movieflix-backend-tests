import { ReactComponent as MovieImage } from '../../../../core/assets/img/movie-card.svg';
import './styles.scss';

const MovieCard = () => (

    <div className="card-base border-radius-10 movie-card">
      <MovieImage />
      <div className="movie-info">
        <h6 className="movie-title"> 
          O retorno do rei.
        </h6>
        <h6 className="movie-year">
          2012
        </h6>
        <h6 className="movie-description">
         O olho do inimigo está se movendo. 
        </h6>

      </div>
    </div>
);


export default MovieCard;