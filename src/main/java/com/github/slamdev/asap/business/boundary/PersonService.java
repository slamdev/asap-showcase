package com.github.slamdev.asap.business.boundary;

import com.github.slamdev.asap.business.entity.Person;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import java.util.Date;

@ApplicationScoped
public class PersonService {

    private Person storedPerson;

    @PostConstruct
    public void init() {
        storedPerson = new Person();
        storedPerson.setFirstName("George");
        storedPerson.setMiddleName("Mikle");
        storedPerson.setLastName("Brown");
        storedPerson.setDateOfBirth(new Date());
    }

    public void save(Person person) {
        storedPerson = person;
    }

    public Person get() {
        return storedPerson;
    }
}
