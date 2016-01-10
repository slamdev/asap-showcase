package com.github.slamdev.asap.business.boundary;

import com.github.slamdev.asap.business.entity.Person;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Stateless
@Path(PersonEndpoint.PATH)
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PersonEndpoint {

    public static final String PATH = "person";

    @Inject
    private PersonService service;

    @GET
    public Person get() {
        return service.get();
    }

    @POST
    public void save(Person person) {
        service.save(person);
    }
}
