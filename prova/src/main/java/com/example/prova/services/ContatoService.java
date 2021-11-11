package com.example.prova.services;

import com.example.prova.model.Contato;
import com.example.prova.repositories.ContatoRepository;
import com.example.prova.services.exceptions.BadRequestException;
import com.example.prova.services.exceptions.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContatoService {

    @Autowired
    private ContatoRepository contatoRepository;

    public List<Contato> findAll() {
        return contatoRepository.findAll();
    }

    public Contato findById(Long id) {
        Optional<Contato> obj = contatoRepository.findById(id);
        return obj.orElseThrow(
                () -> new EntityNotFoundException("Id not found " + id)
        );
    }

    public Contato insert(Contato contato) {
        Optional<Contato> contato1 = contatoRepository.findByEmail(contato.getEmail());
        Optional<Contato> contato2 = contatoRepository.findByTelefone(contato.getTelefone());

        if(!contato1.isEmpty()) {
            throw new BadRequestException("O E-mail informado já existe. Informe outro e-mail");
        }
        if(!contato2.isEmpty()) {
            throw new BadRequestException("O telefone informado já existe");
        }
        return contatoRepository.save(contato);
    }

    public void delete(Long id) {
        contatoRepository.deleteById(id);
    }

    public Contato update(Long id, Contato obj) {
        Contato entity = contatoRepository.getOne(id);
        updateData(entity, obj);
        return contatoRepository.save(entity);
    }

    private void updateData(Contato entity, Contato obj) {
        entity.setNome(obj.getNome());
        entity.setEmail(obj.getEmail());
        entity.setTelefone(obj.getTelefone());
    }

}
