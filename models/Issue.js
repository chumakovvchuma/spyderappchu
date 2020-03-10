const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let issueSchema = new Schema({
  issues: {
    type: String
  }
}, {
    collection: 'issues'
  })

module.exports = mongoose.model('Issue', issueSchema)