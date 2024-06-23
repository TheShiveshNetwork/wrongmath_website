import { Schema, model, models } from "mongoose";

interface IExam {
    name: string;
    metadata: object;
    subjects: {
        name: string;
        subjectId: string;
    }[];
    examCode: string;
}

const SubjectSchema = new Schema(
    {
        name: { type: String },
        subjectId: { type: String }
    }
)

const ExamSchema = new Schema<IExam>(
    {
        name: { type: String, required: true },
        metadata: { type: Object },
        subjects: [SubjectSchema],
        examCode: { type: String, required: true }
    }
)

export default models.Exams || model('Exams', ExamSchema);