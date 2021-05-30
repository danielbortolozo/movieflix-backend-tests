
import { useEffect, useState } from 'react';
import './styles.scss';
import MovieCard from './components/MovieCard';
import { Link } from 'react-router-dom';
import { makeRequest } from '../../core/utils/request';
import { MovieResponse } from '../../core/types/Movie';
const Catalog = () => {
      
//quando o componente iniciar buscar a lista de movies.

   const [movieResponse, setMovieResponse] = useState<MovieResponse>(); 

console.log('Response: ',movieResponse);

useEffect(() => {
    const params = {
        page: 0,
        linesPerPage: 8
    }

   console.log("chamar endpoint:");
    makeRequest({url: '/movies', params})     
     .then(response => setMovieResponse(response.data));
     
}, [])

  return (

    <div className="catalog-container">
        <h1 className="catalog-title">
            Filtro catalogo de filmes.
        </h1>

        <div className="catalog-movies"> 
            {movieResponse?.content.map(movie => (

            <Link to={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
            </Link>
            ) )}
            
        </div>
    </div>
    );
};

export default Catalog;