import { RecipeIngredient } from "./recipe-ingredients";

export class Recipes {
    constructor(
        public userId: number,
        public id?: number,
        public name: string = "",
        public ingredients: RecipeIngredient[]= [],
        public instructions: string = "",
        
        
        ){}
}
