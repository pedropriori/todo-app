const express = require("express");
const { saveTasks, getAllTasks, getTasksById, updateTasks, deleteTasks } = require("../database/tasks");
const router = express.Router();


router.get("/tasks", async (req, res) => {
    const moreThan = req.query.more_than ? Number(req.query.more_than) : 0;
    const tasks = await getAllTasks()
    res.json({
        tasks
    })
})

router.get("/tasks/:id", async (req, res) => {
    const id = Number(req.params.id);
    const task = await getTasksById(id)
    res.json({
        task
    })
})

router.post("/tasks", async (req, res) => {
    const newTask = {
        nome: req.body.name,
        descricao: req.body.descricao,
        isDone: req.body.isDone
    }
    const savedTask = await saveTasks(newTask)
    res.json({
        task: savedTask
    })
})

router.put("/tasks/:id", async (req, res) => {
    const id = Number(req.params.id);
    const task = {
        nome: req.body.name,
        descricao: req.body.descricao,
        isDone: req.body.isDone
    }
    const updateTask = await updateTask(id, task);
    res.json({
        task: updateTask
    })
})

router.delete("/tasks/:id", async (req, res) => {
    const id = Number(req.params.id);
    await deleteTask(id);
    res.status(204).send();
})

module.exports = {
    router
}