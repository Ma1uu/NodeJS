const express = require("express");
const router = express.Router();

//listar categoria
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Listar cursos",
        view: "cursos/show",
    });
});

//form edit categoria
router.get("/edit", async (req, res) => {
    res.render("base", {
        title: "Editar cursos",
        view: "cursos/edit",
    });
});

//form add categoria
router.get("/add", async (req, res) => {
    res.render("base", {
        title: "Add cursos",
        view: "cursos/add",
    });
});

module.exports = router;