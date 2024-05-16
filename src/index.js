export default function getSpecialAttacks(character) {
  const { special } = character;
  special.forEach(attack => {
    if (!('description' in attack)) {
      attack.description = 'Описание недоступно';
    }
  })
  return special;
}