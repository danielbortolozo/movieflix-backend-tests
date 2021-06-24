package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.dto.GenreDTO;
import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

   @Autowired
   private MovieRepository repository;
   @Autowired
   private GenreRepository genreRepository;
   @Autowired
   private ReviewRepository reviewRepository;

   @Transactional(readOnly = true)
   public MovieDTO findById(Long id) {
       Optional<Movie> movie = repository.findById(id);

      System.out.println("reviews : "+movie.get().getReviews());
       movie.orElseThrow(() -> new ResourceNotFoundException("Entity not found."));
       return new MovieDTO(movie.get());
   }

   @Transactional(readOnly = true)
   public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
      Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
      Page<Movie> list = repository.find(genre, pageRequest);
      return list.map(x -> new MovieDTO(x));
   }


}
