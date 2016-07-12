const Project = require('../models/project')

function listProjects (req, res) {
  Project.find((err, projectsArray) => {
    if (err) return res.status(404).json({message: 'Project not found'})

    // rather than return all data which could be huge, we create a simplified array with only a couple of key fields
    const simplifiedList = []
    for (let i = 0; i < projectsArray.length; ++i) {
      simplifiedList.push({id: projectsArray[i].id, title: projectsArray[i].name})
    }
    res.status(200).json(simplifiedList)
  })
}
function showProjects (req, res) {
  Project.findById({_id: req.params.id}, (err, project) => {
    if (err) return res.status(404).json({message: 'Project not found'})

    res.status(200).json(project)
  })
}

module.exports = {
  index: listProjects,
  show: showProjects
}
