package com.djrw.habitrack.DAO;
import org.springframework.data.repository.CrudRepository;

import com.djrw.habitrack.entity.Usuario;

public interface IUsuario extends CrudRepository <Usuario, Integer>{
    
}
