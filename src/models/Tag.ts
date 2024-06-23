import { Schema, model, models } from "mongoose";

interface ITag {
    name: string;
    description: string;
    metadata: object;
    tagCode: string;
}

const TagSchema = new Schema<ITag>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        metadata: { type: Object },
        tagCode: { type: String, required: true },
    }
);


export default models.Tags || model('Tags', TagSchema);