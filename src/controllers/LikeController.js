import Alumni from '../models/Alumni';

export default {
  async store(req, res) {
    const { user } = req.headers;
    const { alumniId } = req.params;

    const alumniLogged = await Alumni.findById(user)
      .catch(err => res.status(400).json({ error: 'Alumni not found' }));

    const likedAlumni = await Alumni.findById(alumniId)
      .catch(err => res.status(400).json({ error: 'Alumni not found' }));

    if (alumniLogged.likes.includes(likedAlumni._id)) {
      return res.status(400).json({ error: 'Alumni is already liked' })
    }

    if (likedAlumni.likes.includes(alumniLogged._id)) {
      console.log("Deu Match")
    }

    alumniLogged.likes.push(likedAlumni._id);

    await alumniLogged.save();

    return res.json(alumniLogged)
  }
}