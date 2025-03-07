package com.devsuperior.movieflix.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "genre")
public class Genre implements Serializable {

    private static final long serialVersionUID =1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    public Genre() {
    }

    public Genre(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
