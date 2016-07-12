// load in the environment vars
require('dotenv').config()

var seeder = require('mongoose-seed')

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/profile.js',
    'models/project.js'
  ])

  // Clear specified collections
  seeder.clearModels(['Profile', 'Project'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data)
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'Profile',
    'documents': [
      {
        'first_name': 'Jeremiah',
        'last_name': 'Alexander',
        'picture': 'me.png'
      }
    ]
  },
  {
    'model': 'Project',
    'documents': [
      {
        'title': 'My First Project',
        'skills': [{name: 'javascript'}]
      }
    ]
  }
]
