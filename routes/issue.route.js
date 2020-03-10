// @ts-nocheck
let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let issueSchema = require('../models/Issue');

// CREATE Student
router.route(`/create-issue`).post((req, res, next) => {
  issueSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Students
router.route(`/`).get((req, res) => {
  issueSchema.find((error, data) => {
    if (error) {
      
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route(`/edit-issue/:id`).get((req, res) => {
  issueSchema.findById(req.params.id, (error, data) => {
    if (error) {

      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Student
router.route(`/update-issue/:id`).put((req, res, next) => {
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student updated successfully !')
    }
  })
})

// Delete Student
router.route(`/delete-issue/:id`).delete((req, res, next) => {
  issueSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;