const getGcd = (a, b) => (a % b ? getGcd(b, a % b) : Math.abs(b));
const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

// Конструктор makeRational() - принимает на вход числитель и знаменатель, возвращает дробь в виде объекта.
// Селектор getNumer() - возвращает числитель
// Селектор getDenom() - возвращает знаменатель
// Сложение add() - складывает переданные дроби
// Вычитание sub() - находит разность между двумя дробями

const makeRational = (numer, denom) => {
  const gcd = getGcd(numer, denom);
  return { numer: numer / gcd, denom: denom / gcd };
};
const getNumer = (rat) => rat.numer;
const getDenom = (rat) => rat.denom;

const add = (rat1, rat2) => {
  return makeRational(getNumer(rat1) * getDenom(rat2) + getNumer(rat2) * getDenom(rat1), getDenom(rat1) * getDenom(rat2));
};

const sub = (rat1, rat2) => {
  return makeRational(getNumer(rat1) * getDenom(rat2) - getNumer(rat2) * getDenom(rat1), getDenom(rat1) * getDenom(rat2));
};

const rat1 = makeRational(3, 9);
const rat2 = makeRational(10, 3);

const rat3 = makeRational(-4, 16);
const rat4 = makeRational(12, 5);

const rat5 = makeRational(1, 15);
const rat6 = makeRational(4, 25);

console.log(add(rat1, rat2));
console.log(sub(rat1, rat2));
