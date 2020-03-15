import axios from 'axios';
import Alumni from "../models/Alumni";
import classNames from "../utils/classNames";

export default {

  async index(req, res) {
    const { user } = req.headers;

    const loggedAlumni = await Alumni.findById(user)
    .catch(err => res.status(400).json({ error: 'Alumni not found' }));

    const users = await Alumni.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedAlumni.likes } },
        { _id: { $nin: loggedAlumni.dislikes } },
      ]
    })

    return res.json(users)
  },

  async store(req, res) {

    const { userName, bootcampNumber } = req.body;

    const loggedAlumni = await Alumni.findOne({ user: userName });

    if (loggedAlumni) {
      return res.json(loggedAlumni);
    }

    const response = await axios.get(`https://api.github.com/users/${userName}`);

    const { name, bio, avatar_url: avatar } = response.data
    const likes = [2, 2]
    const alumini = await Alumni.create({
      name,
      user: userName,
      bootcampNumber,
      bootcampClassName: classNames[bootcampNumber],
      bio,
      avatar,
    });

    return res.json(alumini)
  }
}