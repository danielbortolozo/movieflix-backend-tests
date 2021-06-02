
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ReactComponent as StarImage } from '../../../../core/assets/img/star.svg';
import FormReview from '../FormReview';
import CardReview from '../CardReview';
import './styles.scss';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../../../core/utils/request';
import { Movie } from '../../../../core/types/Movie';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {
 
    const [movie, setMovie] = useState<Movie>();
    const  { movieId } = useParams<ParamsType>();
    console.log('Movie :', movie);
    
    useEffect(() =>  {
        makeRequest({ url: `/movies/${movieId}`})
          .then(response => setMovie(response.data));
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


        <div className="movie-details-avaliacao card-base border-radius-10">
          <FormReview />
       </div>   
           <CardReview />
          <CardReview />
          <CardReview />
          <CardReview />
          <CardReview />
          <CardReview />
          <CardReview />
       
             
        
        </>
     );
};

export default MovieDetails;