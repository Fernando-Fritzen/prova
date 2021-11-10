package com.example.prova.repositories;

import com.example.prova.model.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContatoRepository extends JpaRepository<Contato, Long> {

    Optional<Contato> findByEmail(String email);
    Optional<Contato> findByTelefone(String telefone);
}
