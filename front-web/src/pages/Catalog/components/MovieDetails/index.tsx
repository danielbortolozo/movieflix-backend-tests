
import { useParams } from 'react-router';
import FormReview from '../FormReview';
import CardReview from '../CardReview';
import { useEffect, useState } from 'react';
import { makePrivateRequest } from '../../../../core/utils/request';
import { Movie } from '../../../../core/types/Movie';
import { getSessionData, isAllowedByRole } from '../../../../core/utils/auth';
import './styles.scss';

type ParamsType = {
  movieId: string;
}

const MovieDetails = () => {

  const [movie, setMovie] = useState<Movie>();
  const sessionData = getSessionData();
  const [user, setUser] = useState<number | undefined>();
  const { movieId } = useParams<ParamsType>();


  useEffect(() => {
    setUser(sessionData.userId);
    makePrivateRequest({ url: `/movies/${movieId}` })
      .then(response => {
        setMovie(response.data)
    });
  }, [movieId]);
  
  return (
    <>
    <div className="movie-details-container card-base border-radius-10">
      <div className="row">
        <div className="col-6 pr-5">
          <div className="movie-details-card text-center">
            <img src={movie?.imgUrl}
              className="movie-details-img" />
          </div>
        </div>

        <div className="col-6">
            <h3 className="movie-details-title">{movie?.title}</h3>
            <h6 className="movie-year-detail">
              {movie?.year}
            </h6>
            <h5 className="movie-details-subtitle">
              {movie?.subTitle}
            </h5>
            <p className="movie-details-card-text  card-base border-radius-10">
              {movie?.synopsis}
            </p>
        </div>
      </div>
    </div>
    {isAllowedByRole(['ROLE_MEMBER']) && (
      <div className="movie-details-avaliacao card-base border-radius-10">
        <FormReview />
      </div>
    )}
    {movie?.reviews.map(review => (
      <CardReview review={review} />
    ))}
    </>
  );
};

export default MovieDetails;