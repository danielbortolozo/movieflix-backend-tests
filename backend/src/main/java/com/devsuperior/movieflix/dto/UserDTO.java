package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.User;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class UserDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    @NotBlank(message = "Nome requerido.")
    private String userName;
    @Email(message = "Favor entrar com um e-mail válido.")
    private String email;

    Set<RoleDTO> roles = new HashSet<>();

    public UserDTO() {
    }


    public UserDTO(User entity) {
        id = entity.getId();
        userName = entity.getUserName();
        email = entity.getEmail();
        entity.getRoles().forEach(rol -> this.roles.add(new RoleDTO(rol)));
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setRoles(Set<RoleDTO> roles) {
        this.roles = roles;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<RoleDTO> getRoles() {
        return roles;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDTO userDTO = (UserDTO) o;
        return Objects.equals(id, userDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
