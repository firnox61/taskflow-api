const tasks = [];
let nextId = 1;

function getAllTasks(req, res) {
  res.json(tasks);
}

function getTaskById(req, res) {
  const task = tasks.find((item) => item.id === req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Görev bulunamadı.' });
  }

  res.json(task);
}

function createTask(req, res) {
  const { title, description = '', assignee = '', project = '', status = 'todo', priority = 'medium' } = req.body;

  if (!title || typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ message: 'Görev başlığı zorunludur.' });
  }

  const now = new Date().toISOString();

  const task = {
    id: String(nextId++),
    title: title.trim(),
    description,
    assignee,
    project,
    status,
    priority,
    createdAt: now,
    updatedAt: now,
  };

  tasks.push(task);
  res.status(201).json(task);
}

function updateTask(req, res) {
  const task = tasks.find((item) => item.id === req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Görev bulunamadı.' });
  }

  Object.assign(task, req.body, {
    id: task.id,
    createdAt: task.createdAt,
    updatedAt: new Date().toISOString(),
  });

  res.json(task);
}

function deleteTask(req, res) {
  const taskIndex = tasks.findIndex((item) => item.id === req.params.id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Görev bulunamadı.' });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};