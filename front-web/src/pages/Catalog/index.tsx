
import React from 'react';
import './styles.scss';
import MovieCard from './components/MovieCard';
import { Link } from 'react-router-dom';

const Catalog = () => (
  <>
    <div className="catalog-container">
        <h1 className="catalog-title">
            Filtro catalogo de filmes.
        </h1>

        <div className="catalog-movies"> 
            <Link to="/movies/1"><MovieCard /></Link>
            <Link to="/movies/2"><MovieCard /></Link> 
            <Link to="/movies/3"><MovieCard /></Link>
            <Link to="/movies/4"><MovieCard /></Link>
        </div>
    </div>
    

   </>
);

export default Catalog;