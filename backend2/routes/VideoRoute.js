const router = require("express").Router();

const Video = require("../models/Video");





//Add new car

router.route("/addVideo").post(async (req, res) => {

  //Desctucture the request body and get car details

  const {

   videoLink,
description

  } = req.body;




  try {

    //Create a car details object and initilize above variables

    let video = new Video({

        videoLink,
    description

    });

    const result = await video.save();




    if (result) res.status(201).send("Data added successfully !");

    else res.status(500).send("Server Error !");

  } catch (error) {

    console.log(error);

    res.status(500).send("Server Error !");

  }

});




//Get all cars

router.route("/getVideo").get((req, res) => {

  Video.find()

    .then((videos) => {

      res.status(200).json(videos);

    })

    .catch((err) => {

      console.log(err);

    });

});




// //Get one car

// router.route("/getOneCar/:id").get((req, res) => {

//   const id = req.params.id;

//   Car.findById(id)

//     .then((car) => {

//       res.status(200).json(car);

//     })

//     .catch((err) => {

//       console.log(err);

//     });

// });




// //Update car

// router.route("/updateCar/:id").put(async (req, res) => {

//   const id = req.params.id;

//   const {

//     name,

//     type,

//     image,

//     isFavorite,

//     price,

//     oldPrice,

//     seats,

//     transition,

//     fuel,

//     image1,

//     image2,

//     image3

//   } = req.body;

//   let updatedCar = {

//     name,

//     type,

//     image,

//     isFavorite,

//     price,

//     oldPrice,

//     seats,

//     transition,

//     fuel,

//     image1,

//     image2,

//     image3

//   };

//   await Car.findByIdAndUpdate(id, updatedCar)

//     .then(() => {

//       res.status(200).send("Car Updated");

//     })

//     .catch((err) => {

//       console.log(err);

//       res.send(500).send("Update Failed");

//     });

// });




//Delete car

router.route("/deleteVideo/:id").delete(async (req, res) => {

  const id = req.params.id;

  await Video.findByIdAndDelete(id)

    .then(() => {

      res.status(200).send("Video Deleted");

    })

    .catch((err) => {

      console.log(err);

      res.status(500).send("Delete Failed");

    });

});




module.exports = router;