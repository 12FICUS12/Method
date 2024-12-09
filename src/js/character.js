export class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
      this.name = name;
      this.type = type;
      this.health = health;
      this.level = level;
      this.attack = attack;
      this.defence = defence;

      const typeHeroes = [
          "Bowerman",
          "Daemon",
          "Magician",
          "Swordsman",
          "Undead",
          "Zombie",
      ];

      if (typeof name !== "string") {
          throw new Error("Имя должно быть строкой");
      }
      if (name.length < 2 || name.length > 10) {
          throw new Error("Имя должно быть от 2 до 10 символов");
      }
      if (!typeHeroes.includes(type)) {
          throw new Error("Неверный тип персонажа");
      }
  }

  levelUp() {
      if (this.health <= 0) {
          throw new Error("Нельзя повысить левел умершего");
      }
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100; 
  }

  damage(points) {
    console.log(`Initial health: ${this.health}`);
    const damageTaken = points * (1 - this.defence / 100);
    this.health -= damageTaken;
    console.log(`Damage taken: ${damageTaken}, New health: ${this.health}`);

    if (this.health < 0) {
        this.health = 0;
    }
}
}