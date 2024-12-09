import Character from "../character";
import Bowerman from "../Bowerman.js";
import Daemon from "../Daemon";
import Magician from "../Magician";
import Swordsman from "../Swordsman";
import Undead from "../Undead";
import Zombie from "../Zombie";

test("Заданный персонаж не существует", () => {
  expect(() => {
    const result = new Character("xxx", "Fairy");
    return result;
  }).toThrow();
});

test("creation Bowerman", () => {
  const recieved = new Bowerman("Bobik", "Bowerman");
  expect(recieved).toEqual({
    name: "Bobik",
    type: "Bowerman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test("creation Daemon", () => {
  const recieved = new Daemon("Bobik", "Daemon");
  expect(recieved).toEqual({
    name: "Bobik",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
test("creation Magician", () => {
  const recieved = new Magician("Bobik", "Magician");
  expect(recieved).toEqual({
    name: "Bobik",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
test("creation Swordsman", () => {
  const recieved = new Swordsman("Bobik", "Swordsman");
  expect(recieved).toEqual({
    name: "Bobik",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
test("creation Undead", () => {
  const recieved = new Undead("Bobik", "Undead");
  expect(recieved).toEqual({
    name: "Bobik",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
test("creation Zombie", () => {
  const recieved = new Zombie("Bobik", "Zombie");
  expect(recieved).toEqual({
    name: "Bobik",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});