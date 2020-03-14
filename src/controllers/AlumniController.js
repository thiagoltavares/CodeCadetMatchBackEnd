import axios from 'axios';
import Alumni from "../models/Alumni";
import classNames from "../utils/classNames";

const alumniController = {
  async store(req, res) {
    
    const { userName, bootcampNumber } = req.body;

    const userExists = await Alumni.findOne({user: userName});

    if (userExists) {
      return res.json(userExists);
    }
    
    const response = await axios.get(`https://api.github.com/users/${userName}`);

    const {name, bio, avatar_url: avatar} = response.data

    const alumini = await Alumni.create({
      name,
      user: userName,
      bootcampNumber,
      bootcampClassName: classNames[bootcampNumber],
      bio,
      avatar
    });

    return res.json(alumini)
  }
}

export default alumniController;