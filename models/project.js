const mongoose = require('mongoose')

const SkillSchema = mongoose.Schema({
  name: { type: String }
})

const ProjectSchema = mongoose.Schema({
  title: { type: String, required: true, minlength: 5 },
  skills: [SkillSchema]
})

module.exports = mongoose.model('Project', ProjectSchema)
