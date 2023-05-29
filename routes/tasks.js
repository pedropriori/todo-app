const express = require("express");
const { saveTask, getAllTasks, getTaskById, updateTask, deleteTask } = require("../database/tasks");
const auth = require("../middleware/auth");
const router = express.Router();
const { taskSchema } = require("../schema/task");
const { tasks } = require("../database/prisma");


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
    try {
        const newTask = taskSchema.parse(req.body);
        const savedTask = await saveTask(newTask)
        res.json({
            task: saveTask
    })
    } catch(err) {
        res.status(500).json({
            message: "Server error."
        })
    }
})

router.put("/tasks/:id", auth, async (req, res) => {
    const id = Number(req.params.id);
    const task = taskSchema.parse(req.body);
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