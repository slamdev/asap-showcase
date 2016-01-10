"use strict";

$(document).ready(function () {

    var endpointUrl = "/rest/person";

    acquirePerson();

    $("#datetimepicker").datetimepicker({
        format: "YYYY-MM-DD"
    });

    $("#save").click(function () {
        var person = {
            firstName: val("firstName"),
            middleName: val("middleName"),
            lastName: val("lastName"),
            dateOfBirth: toTimestamp(val("dateOfBirth"))
        };
        savePerson(person);
    });

    function acquirePerson() {
        $.ajax(endpointUrl).done(renderPerson).fail(renderError);
    }

    function savePerson(person) {
        $.ajax({
            method: "POST",
            url: endpointUrl,
            data: JSON.stringify(person),
            contentType: "application/json"
        }).fail(renderError);
    }

    function val(name) {
        return $("#" + name).val();
    }

    function renderPerson(result) {
        fill("firstName", result.firstName);
        fill("middleName", result.middleName);
        fill("lastName", result.lastName);
        fill("dateOfBirth", fromTimestamp(result.dateOfBirth));
    }

    function fromTimestamp(timestamp) {
        return moment(timestamp).format("YYYY-MM-DD");
    }

    function toTimestamp(date) {
        return moment(date).format("x");
    }

    function fill(name, value) {
        $("#" + name).val(value);
    }

    function renderError(result) {
        console.log(result);
        alert(result);
    }
});