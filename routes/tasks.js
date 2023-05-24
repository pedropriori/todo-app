const express = require("express");
const { saveTask, getAllTasks, getTaskById, updateTask, deleteTask } = require("../database/tasks");
const auth = require("../middleware/auth");
const router = express.Router();


router.get("/tasks", auth, async (req, res) => {
    const moreThan = req.query.more_than ? Number(req.query.more_than) : 0;
    const tasks = await getAllTasks()
    res.json({
        tasks
    })
})

router.get("/tasks/:id", auth, async (req, res) => {
    const id = Number(req.params.id);
    const task = await getTasksById(id)
    res.json({
        task
    })
})

router.post("/tasks", auth, async (req, res) => {
    const newTask = {
        nome: req.body.name,
        descricao: req.body.descricao,
        isDone: req.body.isDone
    }
    const savedTask = await saveTask(newTask)
    res.json({
        task: saveTask
    })
})

router.put("/tasks/:id", auth, async (req, res) => {
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

router.delete("/tasks/:id", auth, async (req, res) => {
    const id = Number(req.params.id);
    await deleteTask(id);
    res.status(204).send();
})

module.exports = {
    router
}