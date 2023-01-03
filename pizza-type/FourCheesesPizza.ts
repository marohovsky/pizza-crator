import IPizza from "../IPizza";


class FourCheesesPizza implements IPizza{
    name: string;
    dough: string;
    sause: string;
    ingredients: string[];
    prepared: boolean;
    sizeInCM: number;
    
    constructor(size:number){
        this.name = 'FourCheesePizza ' + this.sizeInCM;
        this.dough = 'yeast-free dough';
        this.sause = 'creamy sause';
        this.ingredients = ['Ukraine cheese', 'Mozzarela', 'Dor Blue', 'Parmesan'];
        this.prepared = false;
        this.sizeInCM = size;
    }
}
