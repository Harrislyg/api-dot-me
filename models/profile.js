const mongoose = require('mongoose')

const ProfileSchema = mongoose.Schema({
  first_name: { type: String, required: true, minlength: 5 },
  last_name: { type: String, required: true, minlength: 5 },
  picture: { type: String }
})

ProfileSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    return {
      id: ret._id,
      name: `${ret.first_name} ${ret.last_name}`,
      picture: ret.picture
    }
  }
})

module.exports = mongoose.model('Profile', ProfileSchema)
