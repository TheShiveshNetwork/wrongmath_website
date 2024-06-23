import { Schema, model, models } from "mongoose";


interface ISettings {
    notifications: {
        allow: boolean;
        frequency: "immediate" | "daily" | "weekly";
    };
    themePreferences?: "light" | "dark";
    dataSharing: boolean;
    userId: String;
}

const SettingSchema = new Schema<ISettings>(
    {
        notifications: {
            allow: { type: Boolean },
            frequency: { type: String },
        },
        themePreferences: { type: String },
        dataSharing: { type: Boolean },
        userId: { type: String }
    }
);

export default models.Settings || model("Settings", SettingSchema);