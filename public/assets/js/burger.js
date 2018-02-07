$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevour");

        var newDevoured = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function () {
                console.log("changed devour to", newDevoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {

        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");

                location.reload();
            }
        );
    });

});