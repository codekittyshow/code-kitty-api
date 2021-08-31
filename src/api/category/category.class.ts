import mongoose from 'mongoose';
import ICategory from './category.interface';

mongoose.connect(process.env.MONGO_DB_URI as string);

export const CategorySchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    categoryName: { type: String, required: true },
});

export default mongoose.model<ICategory>('Category', CategorySchema);