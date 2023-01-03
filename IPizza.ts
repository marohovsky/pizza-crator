interface IPizza {
    name: string,
    dough: string,
    sause: string,
    ingredients: string[],
    prepared: boolean,
    sizeInCM: number,
    qtSlice: number,
    borders?: string
    
}

export default IPizza;