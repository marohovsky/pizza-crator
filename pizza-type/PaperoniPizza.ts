import IPizza from "../IPizza";



class PaperoniPizza implements IPizza{
    name: string;
    dough: string;
    sause: string;
    ingredients: string[];
    prepared: boolean;
    sizeInCM: number;
    qtSlice: number
    
    constructor(dough:string = 'yeast-free dough', size:number = 30){
        this.name = 'PaperoniPizza ' + this.sizeInCM;
        this.dough = dough;
        this.sause = 'tomato sause';
        this.ingredients = ['Tomato', 'Mozzarela', 'Salami', 'Olives'];
        this.prepared = false;
        this.sizeInCM = size;
        this.qtSlice = 1;
    }
}

export default PaperoniPizza;
