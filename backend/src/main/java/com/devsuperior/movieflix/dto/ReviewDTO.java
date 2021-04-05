package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;

public class ReviewDTO implements Serializable {
    private Long id;
    private User user;
    private Long idMovie;
    @Size(min = 5, max = 80, message = "Deve ter entre 5 e 200 caracteres.")
    @NotBlank(message = "A avaliação é requirida.")
    private String text;

    public ReviewDTO() {
    }

    public ReviewDTO(Review review) {
        id = review.getId();
        idMovie = review.getMovie().getId();
        user = review.getUser();
        text = review.getText();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
