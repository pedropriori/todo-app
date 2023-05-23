const prisma = require("./prisma");

const getAllTasks = () => {
    return prisma.tasks.findMany();
}

const getTasksById = (id) => {
    return prisma.tasks.findFirst({
        where: {
            id: id
        }
    })
}

const saveTasks = (task) => {
    return prisma.tasks.create({
        data: task
    })
}

const updateTasks = (id, task) => {
    return prisma.tasks.update({
        where: {
            id: id
        }, 
        data: task
    })
}

const deleteTasks = (id) => {
    return prisma.tasks.delete({
        where: {
            id: id
        }
    })
}

module.exports = {
    saveTasks,
    getAllTasks,
    getTasksById,
    updateTasks,
    deleteTasks
}