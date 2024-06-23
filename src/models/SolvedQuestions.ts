import { Schema, model, models } from "mongoose";


interface ISolvedQuestions {
    userId: string;
    questionId: string;
    answer: "correct" | "wrong";
    solveDate: string;
}

const SolvedQuestionSchema = new Schema<ISolvedQuestions>(
    {
        userId: { type: String, required: true },
        questionId: { type: String, required: true },
        answer: { type: String, required: true },
    },
    { timestamps: true }
);

export default models.SolvedQuestions || model('SolvedQuestions', SolvedQuestionSchema);