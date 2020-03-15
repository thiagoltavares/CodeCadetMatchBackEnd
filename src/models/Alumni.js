import { Schema, model } from "mongoose";

const AlumniSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  bootcampNumber: {
    type: Number,
    required: true,
  },
  bootcampClassName: String,
  bio: String,
  avatar: {
    type: String,
    required: true,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'alumni'
  }],
  dislikes: [{
    type: Schema.Types.ObjectId,
    ref: 'alumni'
  }],
}, {
  timestamps: true,
});

export default model('Alumni', AlumniSchema);