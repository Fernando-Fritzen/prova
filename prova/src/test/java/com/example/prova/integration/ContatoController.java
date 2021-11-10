package com.example.prova.integration;

import com.example.prova.model.Contato;
import com.example.prova.repositories.ContatoRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ContatoController {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    ContatoRepository contatoRepository;

    Contato contato = new Contato(null, "teste@gmail.com", "45998450505");

    @Test
    public void testAddContatoWithExistingEmail() {
        contatoRepository.save(contato);
        ResponseEntity<Contato> responseEntity = this.restTemplate
                .postForEntity("http://localhost:" + port + "/contatos", contato, Contato.class);

        Assertions.assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
    }

    @Test
    public void testGetContatoWithInvalidId() {
        ResponseEntity<Contato> responseEntity = this.restTemplate
                .getForEntity("http://localhost:" + port + "/contatos/20", Contato.class);

        Assertions.assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }
}
