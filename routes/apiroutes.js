// const router = require("express").Router();
// // const db = require("../models");
// const Workout = require("../models").Workout;

// router.get("/api/workouts", (req, res) =>{
//     Workout.find()
//         .then(workouts => res.json(workouts))
//         .catch(err => res.json(err));

// });

// router.put("/api/workouts/:id", (req, res) => {
//     Workout.findByIdAndUpdate(
//         req.params.id,
//         { $push: { exercises: req.body } },
//         { new: true }
//     )
//         .then(workout => res.json(workout))
//         .catch(err => res.json(err));
//     });

// router.post("/api/workouts", (req, res) => {
//         Workout.create({
//             day: Date.now()
//         })

//         .then(newWorkout => {
//             console.log("o am the created workout: ", newWorkout);
//         })
//         .catch(err => res.json(err));
//     });
    
    
// router.get("/api/workouts/range", (req, res) => {
//     Workout.find({}) 
//     .then(workouts => {
//         res.json(workouts);
//     })
//     .catch(err => res.json(err));
// });

// router.delete("/api/workouts", (req, res) =>{

// });

// module.exports = router;

var db = require("../models");
const Workout = require("../models").Workout;

module.exports = function(app) {
  app.get("/api/images", function(req, res) {
    db.Image.find({}).then(function(dbImages) {
      res.json(dbImages);
    });
  });

  app.get("/api/workouts", (req, res) =>{
        Workout.find()
            .then(workouts => res.json(workouts))
            .catch(err => res.json(err));
    
    });

    app.put("/api/workouts/:id", (req, res) => {
            Workout.findByIdAndUpdate(
                req.params.id,
                { $push: { exercises: req.body } },
                { new: true }
            )
                .then(workout => res.json(workout))
                .catch(err => res.json(err));
            });
        
        app.post("/api/workouts", (req, res) => {
                Workout.create({
                    day: Date.now()
                })
        
                .then(newWorkout => {
                    console.log("o am the created workout: ", newWorkout);
                })
                .catch(err => res.json(err));
            });
            
            
        app.get("/api/workouts/range", (req, res) => {
            Workout.find({}) 
            .then(workouts => {
                res.json(workouts);
            })
            .catch(err => res.json(err));
        });
        
        app.delete("/api/workouts", (req, res) =>{
        
        });

  app.put("/api/images/:id", function(req, res) {
    db.Image.updateOne(
      { _id: req.params.id },
      { rating: req.body.rating }
    ).then(function(dbImage) {
      res.json(dbImage);
    });
  });
};