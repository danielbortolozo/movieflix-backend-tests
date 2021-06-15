
import { useCallback, useEffect, useState } from 'react';
import './styles.scss';
import MovieCard from './components/MovieCard';
import { Link } from 'react-router-dom';
import { makePrivateRequest } from '../../core/utils/request';
import { Genre, MovieResponse } from '../../core/types/Movie';
import Pagination from '../../core/components/Pagination';
import MovieFilters from '../../core/components/MovieFilters';

const Catalog = () => {
      
//quando o componente iniciar buscar a lista de movies.

   const [movieResponse, setMovieResponse] = useState<MovieResponse>(); 
   const [activePage, setActivePage] = useState(0);
   
   const [genre, setGenre] = useState<Genre>();


   const getMovies = useCallback(() => {

    const params =  {
       page: activePage,
       linesPerPage: 4,
       genreId: genre?.id
    }
    console.log('oiiididididi callback');
    
    makePrivateRequest({url: `/movies`, params})     
    .then(response => setMovieResponse(response.data));


   }, [activePage, genre])

console.log('Response: ',movieResponse);

useEffect(() => {
    getMovies();
    console.log('pididididi');
    
     
}, [getMovies])


const handleChangeCategory = (genre: Genre) => {
    setActivePage(0);
    setGenre(genre);  
    console.log('passsosisisis change category');
     
  }


  return (

    <div className="catalog-container">
       
        <MovieFilters 
        genre={genre}
        handleChangeCategory={handleChangeCategory}
        
        />

        <div className="catalog-movies"> 
            {movieResponse?.content.map(movie => (

            <Link to={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
            </Link>
            ) )}
            
        </div>

        {movieResponse && ( 
         <Pagination 
         activePage={activePage}
         totalPages={movieResponse.totalPages}
         onChange={page => setActivePage(page)}
         />
        )}
    </div>
    );
};

export default Catalog;