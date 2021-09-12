import * as mongoose from 'mongoose';
import ICategory from './category.interface';

export const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
});

export default mongoose.model<ICategory>('Category', CategorySchema);
