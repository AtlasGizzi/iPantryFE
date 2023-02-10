import { RecipeIngredient } from "./recipe-ingredients";

export class Recipes {
    constructor(
        public id?: number,
        public name: string = "",
        public ingredients: RecipeIngredient[]= [],
        public instructions: string = "",
        
        ){}
}
