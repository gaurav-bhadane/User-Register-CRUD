const express = require("express");
const router = express.Router();
const user = require("../models/userSchema");



//register user

router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { name, email, age, mobile, work, address, description } = req.body;

    if (!name || !email || !age || !mobile || !work || !address || !description) {
        res.status(422).json("please fill the data");
    }

    try {

        const preuser = await user.findOne({ email: email });
        console.log(preuser);

        if (preuser) {
            res.status(422).json("this user is already present");
        } else {
            const adduser = new user({
                name, email, age, mobile, work, address, description
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }


})

//get userdata

router.get("/getdata", async (req, res) => {
    try {
        const userdata = await user.find();
        res.status(200).json(userdata);
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

//get individual user

router.get('/getuser/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await user.findById(id);

    if (!userindividual) {
      return res.status(404).json({ error: 'user not found' });
    }

    console.log(userindividual);
    res.status(200).json(userindividual);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
})


//update user data

router.patch("/updateuser/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updateduser = await user.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      console.log(updateduser);
      res.status(200).json(updateduser);
    } catch (error) {
      res.status(422).json(error);
    }
  });
  
  

// delete user
router.delete("/deleteuser/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteuser = await user.findByIdAndDelete(id);
      console.log(deleteuser);
      res.status(200).json(deleteuser);
    } catch (error) {
      res.status(422).json(error);
    }
  });
  
module.exports = router;