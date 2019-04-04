import Team from '../src/js/Team';
/* eslint-disable no-restricted-syntax */
test('with 1 argument', () => {
  const bowman = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const received = [];
  const charTeam = new Team(bowman);
  for (const n of charTeam.getIter()) {
    received.push(n);
  }
  const expected = [{
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  }];
  expect(received).toEqual(expected);
});

test('with 3 arguments', () => {
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
  const received = [];
  const charTeam = new Team(bowman, swordsman, undead);
  for (const n of charTeam.getIter()) {
    received.push(n);
  }
  const expected = [
    {
      name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10,
    },
    {
      name: 'Мечник', type: 'Swordsman', health: 50, level: 1, attack: 40, defence: 10,
    },
    {
      name: 'Нежить', type: 'Undead', health: 50, level: 1, attack: 40, defence: 10,
    },
  ];
  expect(received).toEqual(expected);
});
