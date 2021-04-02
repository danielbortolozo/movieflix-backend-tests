package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.User;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToMany;
import java.io.Serializable;

public class ReviewDTO implements Serializable {
    private Long id;
    private Long idUser;
    private Long idMovie;
    private String text;

    public ReviewDTO() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public Long getIdMovie() {
        return idMovie;
    }

    public void setIdMovie(Long idMovie) {
        this.idMovie = idMovie;
    }

    public void setIdMovie(long idMovie) {
        this.idMovie = idMovie;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
