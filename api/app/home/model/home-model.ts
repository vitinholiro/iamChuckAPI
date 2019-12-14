import mongoose, { Schema, Document } from 'mongoose';

export interface HomeInterface extends Document {
    id: string;
    categories: [string];
    icon_url: string;
    url: string;
    value: string;
  }

const HomeSchema: Schema = new Schema({
    id: {
        type: String,
        required: true
    },
    categories: [{
        type: String,
        required: true,
        unique: true 
    }],
    icon_url: {
        type: String
    },
    url: {
        type: String 
    },
    value: {
        type: String,
        required: true 
    }
});

export default mongoose.model<HomeInterface>('Home', HomeSchema);