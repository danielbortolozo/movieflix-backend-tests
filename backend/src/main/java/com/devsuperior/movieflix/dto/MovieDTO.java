package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class MovieDTO implements Serializable {

    private Long id;
    private String title;
    private String subTitle;
    private Integer year;
    private String imgUrl;
    private String synopsis;
    private Long genreId;
    private List<ReviewDTO> reviews = new ArrayList<>();

    public MovieDTO() {
    }

    public MovieDTO(Movie movie) {
        id = movie.getId();
        title = movie.getTitle();
        subTitle = movie.getSubTitle();
        year = movie.getYear();
        imgUrl = movie.getImgUrl();
        synopsis = movie.getSynopsis();
        genreId = movie.getGenre().getId();

        movie.getReviews().stream().forEach(r -> {
            ReviewDTO reviewDTO = new ReviewDTO();

            reviewDTO.setIdMovie(r.getMovie().getId());
            reviewDTO.setIdUser(r.getUser().getId());
            reviewDTO.setText(r.getText());
            reviewDTO.setId(r.getId());
            reviews.add(reviewDTO);
        });
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubTitle() {
        return subTitle;
    }

    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public Long getGenreId() {
        return genreId;
    }

    public void setGenreId(Long genreId) {
        this.genreId = genreId;
    }

    public List<ReviewDTO> getReviews() {
        return reviews;
    }


}
