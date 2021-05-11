
import React from 'react';
import './styles.scss';
import MovieCard from './components/MovieCard';

const Catalog = () => (
  <>
    <div className="catalog-container">
        <h1 className="catalog-title">
            Filtro catalogo de filmes.
        </h1>

        <div className="catalog-movies"> 
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
           
        </div>
    </div>
    

   </>
);

export default Catalog;