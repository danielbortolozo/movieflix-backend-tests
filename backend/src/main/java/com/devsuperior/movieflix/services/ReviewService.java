package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.dto.UserDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ReviewRepository repository;

    @Transactional
    public ReviewDTO inster(ReviewDTO dto) {
        Review entity = new Review();
        copyDtoToEntity(dto, entity);
        entity = repository.save(entity);
        return new ReviewDTO(entity);
    }
    private void copyDtoToEntity(ReviewDTO dto, Review entity) {

        entity.setText(dto.getText());
        Movie movie = movieRepository.getOne(dto.getIdMovie());
        entity.setMovie(movie);
        entity.setUser(converterUserDTOforUser(dto.getUser()));
    }

    private User converterUserDTOforUser(UserDTO dto) {
        User user = new User();
        if (dto != null) {
            user.setUserName(dto.getUserName());
            user.setEmail(dto.getEmail());
            user.setId(dto.getId());
            return user;
        }
        return  null;
    }
    @Transactional(readOnly = true)
    public Page<ReviewDTO> findAllPaged(PageRequest pageRequest) {
        Page<Review> list = repository.findAll(pageRequest);
        // Lambda expression that transform list category into categoryDTO
        return list.map(x -> new ReviewDTO(x));

    }
}
