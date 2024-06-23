import { Schema, model, models } from "mongoose";

interface IChapter {
    name: string;
    subjectId: string;
    chapterIndex: number;
    description: string;
    metadata: object;
    chapterCode: string;
}

const ChapterSchema = new Schema<IChapter>(
    {
        name: { type: String, required: true },
        subjectId: { type: String, required: true },
        chapterIndex: { type: Number, required: true },
        description: { type: String, required: true },
        metadata: { type: Object },
        chapterCode: { type: String, required: true },
    }
);


export default models.Chapters || model('Chapters', ChapterSchema);