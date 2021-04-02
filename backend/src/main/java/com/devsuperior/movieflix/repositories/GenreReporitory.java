package com.devsuperior.movieflix.repositories;

import com.devsuperior.movieflix.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreReporitory extends JpaRepository<Genre, Long> {
}
