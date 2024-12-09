import { Character } from "../character";

test("Имя должно быть строкой", () => {
  expect(() => {
    const result = new Character(123, "Bowerman");
    return result;
  }).toThrow();
});

test("Имя больше 10 символов", () => {
  expect(() => {
    const result = new Character("ааааааааааааааа", "Bowerman");
    return result;
  }).toThrow();
});

test("Имя меньше 2 символов", () => {
  expect(() => {
    const result = new Character("а", "Bowerman");
    return result;
  }).toThrow();
});