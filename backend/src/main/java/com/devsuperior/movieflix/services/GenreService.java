package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.dto.GenreDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class GenreService {

    @Autowired
    private GenreRepository repository;

    public List<GenreDTO> findAll() {
        List<Genre> lista = repository.findAll();
        return (List<GenreDTO>) lista.stream().map(g -> new GenreDTO(g) );
    }

}
