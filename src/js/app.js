export default function destruct(data) {
  const { special } = data;
  const result = [];
  for (const attack of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = attack;
    result.push({
      id, name, icon, description,
    });
  }

  return result;
}

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

console.log(destruct(character));
