package com.djrw.habitrack.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.djrw.habitrack.DAO.IHabito;
import com.djrw.habitrack.entity.Habito;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin("*")
@RequestMapping("/habitos")
public class HabitosController {

    @Autowired
    private IHabito dao;
  
    @GetMapping
    public List<Habito> listaHabitos() {
        return (List<Habito>) dao.findAll();
    }

    @PostMapping
    public Habito criarHabito(@RequestBody Habito habito) {
        Habito habitoNovo = dao.save(habito);
        return habitoNovo;
    }
    
    @PutMapping
    public Habito editarHabito(@RequestBody Habito habito) {
        Habito habitoNovo = dao.save(habito);
        return habitoNovo;
    }

    @DeleteMapping("/{id}")
    public Optional<Habito> exclHabito (@PathVariable Integer id) {
        Optional<Habito> habito = dao.findById(id);
        dao.deleteById(id);
        return habito;
    }
}
