
import { useParams } from 'react-router';
import './styles.scss';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {
    const  { movieId } = useParams<ParamsType>();
    console.log('Movie :', movieId);
    
  
    return (
        <>
        <div className="movie-details-container card-base border-radius-10">
            <div className="row">
                 <div className="col-6 pr-5">

                    <div className="movie-details-card text-center">
                      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/k1PKCpRZRCy0ECWJjJEpR4joyXP.jpg"
                       className="movie-details-img" />
                    </div>

                 </div>   
                 <div className="col-6">
                     <h1>Terror Birds</h1>
                     <h6 className="movie-year-detail">
                         2012
                     </h6>
                     <h5 className="movie-details-subtitle">
                         	Terror bird
                     </h5>
                     <p className="movie-details-card-text  card-base border-radius-10">
                          Descricao, aqui vem a sinopisy do filme que sera exibido no proximo domingo.
                          Aqui começa tudo que fala sobre o filme, bla bla bla, e amem.
                     </p>

                 </div>





            </div>  

        </div>


        <div className="movie-details-avaliacao card-base border-radius-10">
               avaliacao
        </div>
        </>
     );
};

export default MovieDetails;