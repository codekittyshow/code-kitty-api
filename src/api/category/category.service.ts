import ICategory from './category.interface';
import Category from './category.class';

/**
 * Get Categories / Get Categories by id
 * 
 * @param id 
 * @returns Promise<ICategory[]|ICategory|null>
 */
const getCategories = async (id: string|null = null): Promise<ICategory[]|ICategory|null> => {
    if( id ) {
        return await Category.findById(id);
    }
    return await Category.find();
}

/**
 * Insert new category
 * 
 * @param categoryData 
 * @returns Promise<ICategory>
 */
const insertCategory = async (categoryData: ICategory): Promise<ICategory> => {
    const category = new Category(categoryData);
    return category.save();
}

/**
 * Update a category by it's Id
 * 
 * @param id 
 * @param categoryData 
 * @returns Promise<ICategory>
 */
const updateCategory = async (id: string, categoryData: ICategory): Promise<ICategory> => {
    const category = await Category.findById(id);
    if (category) {
        category.categoryName = categoryData.categoryName;
        return category.save();
    }

    return Promise.reject();
}

/**
 * Delete a category from the collection
 * 
 * @param id 
 * @returns Promise<ICategory>
 */
const deleteCategory = async (id: string): Promise<ICategory> => {
    const category = await Category.findById(id);
    if (category) {
        return category.delete();
    }

    return Promise.reject();
}

/**
 * Exporting service methods
 */
export default {
    getCategories,
    insertCategory,
    updateCategory,
    deleteCategory
}
