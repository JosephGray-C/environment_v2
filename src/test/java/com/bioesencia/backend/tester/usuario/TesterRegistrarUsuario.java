package com.bioesencia.backend.tester.usuario;

import com.bioesencia.backend.model.*;
import com.bioesencia.backend.repository.UsuarioRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import java.time.LocalDateTime;
@TestPropertySource("classpath:application.properties")
@SpringBootTest
public class TesterRegistrarUsuario {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Test
    public void registrarUsuario() {
        Usuario u = Usuario.builder()
                .nombre("Ana")
                .apellido("Morales")
                .email("ana@bio.com")
                .password("clave123")
                .telefono("8888-0000")
                .fechaRegistro(LocalDateTime.now())
                .rol(RolUsuario.CLIENTE)
                .activo(true)
                .build();

        usuarioRepository.save(u);
        System.out.println("✔ Usuario registrado con ID: " + u.getId());
    }
}
