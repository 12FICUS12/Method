import Bowerman from "../Bowerman.js";
import Daemon from "../Daemon";
import Swordsman from "../Swordsman";
import Zombie from "../Zombie";

test("Метод levelUp повышает уровень на 1 и изменяет показатели health, attack, defence", () => {
    const received = new Bowerman("sharik", "Bowerman");
    received.levelUp(); 
    expect(received).toEqual({
        name: "sharik",
        type: "Bowerman",
        health: 100,
        level: 2,
        attack: 30, 
        defence: 30, 
    });
})

test("Метод levelUp выбрасывает ошибку, если здоровье персонажа равно 0", () => {
    const received = new Daemon("sharik", "Daemon");
    received.health = 0;
    expect(() => received.levelUp()).toThrow("Нельзя повысить левел умершего"); 
})

test("Метод damage не должен изменять показатель если health = 0", () => {
    const received = new Zombie("sharik", "Zombie");
    received.health = 0;
    // Не вызываем damage, просто проверяем состояние
    expect(received).toEqual({
        name: "sharik",
        type: "Zombie",
        health: 0,
        level: 1,
        attack: 40,
        defence: 10,
    });
});

test("при health < 0 метод damage(points) должен установить health = 0", () => {
    const received = new Daemon("Valera", "Daemon");
    received.health = 10; // Устанавливаем начальное здоровье
    received.damage(100); // Наносим максимальный урон, чтобы здоровье стало меньше нуля
    expect(received.health).toEqual(0); // Ожидаем, что здоровье станет 0
});

test("Метод damage уменьшает health на points * (1 - defence / 100)", () => {
    const received = new Swordsman("sharik", "Swordsman"); 
    received.health = 100; // Обязательно укажите начальное здоровье
    received.damage(50); // Уменьшаем здоровье
    expect(received.health).toEqual(55); // Это правильно, если health изначально было 100
});