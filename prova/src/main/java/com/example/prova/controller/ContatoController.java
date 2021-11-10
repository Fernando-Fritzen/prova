package com.example.prova.controller;

import com.example.prova.model.Contato;
import com.example.prova.services.ContatoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/contatos")
public class ContatoController {

    @Autowired
    private ContatoService contatoService;

    @GetMapping
    public ResponseEntity<List<Contato>> findAll() {
        List<Contato> list = contatoService.findAll();

        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Contato> findById(@PathVariable Long id) {
        Contato obj = contatoService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Contato> insert(@RequestBody Contato contato) {
        contato = contatoService.insert(contato);
        return ResponseEntity.ok().body(contato);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Contato> update(@PathVariable Long id, @RequestBody Contato contato) {
        contato = contatoService.update(id, contato);
        return ResponseEntity.ok().body(contato);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        contatoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
