const { workout } = require("../models");
const db = require("../models");
const Workout = require("../models/workout");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        Workout.find()
        .then(workout => res.json(workout))
        .catch(err => res.json(err));
        // res.status(400).json(err);

        });
    
    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(
            req.params.id,
            { $push: { exercises: req.body }},
            { new: true }
        )
        .then(workout => res.json(workout));
        .catch(err => res.json(err));
    });

    app.post("/api/workouts", (req, res) => {
        Workout.create({
            day: Date.now()
        });

        .then(newWorkout => {
            console.log("o am the created workout: ", newWorkout);
        })
        .catch(err => res.json(err));
    })
    
    
}
app.get("/api/workouts/range", (req, res) ={
    Workout.find({}) 
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => res.json(err));
});

app.delete("/api/workouts", (req, res) =>{

});

module.exports = app;