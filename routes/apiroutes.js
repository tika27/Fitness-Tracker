// const router = require("express").Router();
// const Workout = require("../models/Workout");

// router.get("/api/workouts", (req, res) =>{
//     Workout.aggregate([
//         {
//             $addFields: {
//                 totalDuration: {
//                     $sum: "$exercises.duration"
//                 }
//             }
//         }
//     ])
//         .then(dbWorkout => {
//             res.json(dbWorkout)
//         })
//         .catch(err => {
//             res.status(400).json(err)
//         })

// });

// router.put("/api/workouts/:id", ({ body, params}, res) => {
//     Workout.findByIdAndUpdate(
//         params.id,
//         { $push: { exercises: req.body } },
//         { new: true, runValidators: true }
//     )
//         .then(dbWorkout => {
//             res.json(workout)
//         })

//         .catch(err => {
//             res.json(err)
//         });
//     });

// router.post("/api/workouts", ( {body} , res) => {
//         Workout.create({})
//         .then(dbWorkout => {
//             res.json(dbWorkout)
//         })
//             .catch(err => {
//                 res.status(400).json(err)
//             })
            
// })

//     //     .then(newWorkout => {
//     //         console.log("o am the created workout: ", newWorkout);
//     //     })
//     //     .catch(err => res.json(err));
//     // });
    
    
// router.get("/api/workouts/range", (req, res) => {
//     Workout.aggregate([
//         {
//             $addFields:{
//                 totalDuration: {
//                     $sum: "$exercises.duration"
//                 }
//             }
//         }
//     ]) 
//     .sort({_id: -1}).limit(7)
//     .then(dbWorkout => {
//         res.json(dbWorkout);

//     })
//     .catch(err => {
//         res.status(400).json(err)

//     })
// });

// router.delete("/api/workouts", ({body}, res) =>{
//     Workout.findByIdAndDelete(body.id)
//     .then(() => {
//         res.json(true)
//     })
//     .catch(err =>{
//         res.status(400).json(err)
//     })

// });

// module.exports = router;

var db = require("../models");
const Workout = require("../models/workout.js");

module.exports = function(app) {


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


};