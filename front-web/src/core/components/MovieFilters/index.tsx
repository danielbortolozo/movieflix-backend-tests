import './styles.scss'
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { makePrivateRequest } from '../../utils/request';
import { Genre } from '../../types/Movie';


type Props = {    
    genre?: Genre;    
    handleChangeCategory: (genre: Genre) => void;     
  }




  
const MovieFilters = ({ 
    handleChangeCategory,
    genre
  }: Props) => {
    const [genresResponse, setGenresResponse] = useState<Genre[] | undefined>(); 
  
useEffect(() => {

    makePrivateRequest({url: `/genres`})     
  .then(response => setGenresResponse(response.data));
}, []) 

 
    return (

        <div className="card-base  movie-container-filters">
           <div className="movie-filters-select">
           <Select 
              as={Select} 
              
              name="categories"
              rules={{ required: true}}
              options={genresResponse}
              getOptionLabel={ (option: Genre) => option.name }   
              getOptionValue={ (option: Genre) => String(option.id) }                   
              className="filter-select-container"
              classNamePrefix="movie-genres-select"
              placeholder="Genres"
              value={genre}
              key={`select-${genre?.id}`}
              onChange={value => handleChangeCategory(value as Genre)}  
              
              theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  
                  primary: 'gray',
                },
              })}
            />
            </div>
        </div>
    )
}

export default MovieFilters;