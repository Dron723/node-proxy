const Project = require("../models/Project");

const fetchProjectData = async (req, res, next) => {
  const projectId = req.body.id;

  try {
    const project = await Project.findOne({ id: projectId });
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    req.project = project;
    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = fetchProjectData;
