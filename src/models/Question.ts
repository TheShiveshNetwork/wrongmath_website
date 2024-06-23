import { Schema, model, models } from "mongoose";

interface IQuestion {
    questionNo: number;
    chapterId: string;
    subjectId: string;
    examId: string;
    text: string;
    tags: [string];
    options: [string];
    correctAnswer: string;
    questionCode: string;
}

const QuestionSchema = new Schema<IQuestion>(
    {
        questionNo: { type: Number, required: true },
        chapterId: { type: String, required: true },
        subjectId: { type: String, required: true },
        examId: { type: String, required: true },
        text: { type: String, required: true },
        tags: { type: [{ type: String }], required: true },
        options: { type: [{ type: String }], required: true },
        correctAnswer: { type: String, required: true },
        questionCode: { type: String, required: true },
    }
);


export default models.Questions || model('Questions', QuestionSchema);