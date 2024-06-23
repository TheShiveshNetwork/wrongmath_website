import { Schema, model, models } from "mongoose";

interface ISubject {
    name: string;
    examId: string;
    subjectCode: string;
}

const SubjectSchema = new Schema<ISubject>(
    {
        name: { type: String, required: true },
        examId: { type: String, required: true },
        subjectCode: { type: String, required: true },
    }
);


export default models.Subjects || model('Subjects', SubjectSchema);