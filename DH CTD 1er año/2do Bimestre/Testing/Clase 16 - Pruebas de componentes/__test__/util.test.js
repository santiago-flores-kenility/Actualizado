const { generateText } = require("../js-testing-introduction/util");

describe("Matches comunes", () => {
    const datos = {
        nombre: "Persona1",
        edad: 10,
    };
    const datos2 = {
        nombre: "Persona1",
        edad: 10,
    };
    test("Comprobamos que los objetos son iguales", () => {
        expect(datos).toEqual(datos2);
    });
    test("salida de nombre y edad:  ", () => {
        const text = generateText("Daniel", 30);
        expect(text).toBe("Daniel (30 years old)");
    });
});
