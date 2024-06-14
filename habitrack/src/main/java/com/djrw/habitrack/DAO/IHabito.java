package com.djrw.habitrack.DAO;
import org.springframework.data.repository.CrudRepository;

import com.djrw.habitrack.entity.Habito;

public interface IHabito extends CrudRepository <Habito, Integer>{
    
}
