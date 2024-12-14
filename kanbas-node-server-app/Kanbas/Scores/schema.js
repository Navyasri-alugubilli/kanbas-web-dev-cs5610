import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema(
  {
    student: {
      type: String, default: () => new mongoose.Types.ObjectId().toString(),
      ref: "UserModel",
      required: true,
    },
    quiz: {
      type: String, default: () => new mongoose.Types.ObjectId().toString(),
      ref: "QuizModel",
      required: true,
    },
    score: { type: Number, required: true },
  },
  { collection: "scores" }
);

export default scoreSchema;
