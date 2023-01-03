import IPizza from "./IPizza";
enum PizzaStatus{inProcess, isReady}



class PizzaCreator {
    factoryPizza: any
    factoryDecor: any;
    pizzaReady : boolean;

    constructor (pizzaFactory, decorFactory){
        this.factoryDecor = decorFactory;
        this.factoryPizza = pizzaFactory;
    }

    async createPizza (type: string) {
        let pizza: IPizza
        this.pizzaReady = !PizzaStatus.inProcess;
        pizza = this.factoryPizza(type);

        if(pizza === null){
            console.log('We dont have this type pizza');
            return false;
        }
        
        this.pizzaReady = !PizzaStatus.isReady;
        this.cutPizza(pizza, 6);
        return pizza;


    }

    cutPizza (pizza : IPizza, slice: number): void {
        pizza.qtSlice = slice;
    }

}