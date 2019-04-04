import Team from './js/Team';
/* eslint-disable no-console */
const bowman = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const swordsman = {
  name: 'Мечник',
  type: 'Swordsman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const undead = {
  name: 'Нежить',
  type: 'Undead',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const characterIter = [];

const charTeam = new Team(bowman, swordsman, undead);

for (const n of charTeam.getIter()) { // eslint-disable-line no-restricted-syntax
  characterIter.push(n);
}

console.log(characterIter);
