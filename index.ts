import IPizza from "./IPizza";
enum PizzaStatus{inProcess, isReady}



class PizzaCreator {
    factoryPizza: object;
    factoryDecor: object;
    pizzaState : boolean;

    constructor (pizzaFactory, decorFactory){
        this.factoryDecor = decorFactory;
        this.factoryPizza = pizzaFactory;
    }

    createPizza(type: string) {
        let pizza: IPizza
    }
}