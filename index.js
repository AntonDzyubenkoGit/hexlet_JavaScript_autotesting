const getGcd = (a, b) => (a % b ? getGcd(b, a % b) : Math.abs(b));
const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

// Конструктор makeRational() - принимает на вход числитель и знаменатель, возвращает дробь в виде объекта.
// Селектор getNumer() - возвращает числитель
// Селектор getDenom() - возвращает знаменатель
// Сложение add() - складывает переданные дроби
// Вычитание sub() - находит разность между двумя дробями

const makeRational = (numer, denom) => ({ numer, denom });
const getNumer = (numer) => numer.numer / getGcd(numer.numer, numer.denom);
const getDenom = (numer) => numer.denom / getGcd(numer.numer, numer.denom);

const add = (rat1, rat2) => {
  if (getDenom(rat1) === getDenom(rat2)) {
    const numer = getNumer(rat1) + getNumer(rat2);
    const denom = getDenom(rat1);
    return { numer, denom };
  }

  if (getGcd(getDenom(rat1), getDenom(rat2)) === 1) {
    const multi = getDenom(rat1) * getDenom(rat2);
    const firstMulti = getGcd(getDenom(rat1), multi);
    const secondMulti = getGcd(getDenom(rat2), multi);

    const numer = getNumer(rat1) * secondMulti + getNumer(rat2) * firstMulti;
    const denom = multi;
    return { numer, denom };
  }

  const multi = getGcd(getDenom(rat1), getDenom(rat2));
  const denom = getDenom(rat1) * multi;
  const firstMulti = denom / getDenom(rat1);
  const secondMulti = denom / getDenom(rat2);
  const numer = getNumer(rat1) * firstMulti + getNumer(rat2) * secondMulti;

  return { numer, denom };
};

const sub = (rat1, rat2) => {
  if (getDenom(rat1) === getDenom(rat2)) {
    let numer = getNumer(rat1) - getNumer(rat2);
    let denom = getDenom(rat1);
    if (getGcd(numer, denom) !== 1) {
      numer = numer / getGcd(numer, denom);
      denom = denom / getGcd(numer, denom);
      return { numer, denom };
    }
    return { numer, denom };
  }

  if (getGcd(getDenom(rat1), getDenom(rat2)) === 1) {
    const multi = getDenom(rat1) * getDenom(rat2);
    const firstMulti = getGcd(getDenom(rat1), multi);
    const secondMulti = getGcd(getDenom(rat2), multi);

    const numer = getNumer(rat1) * secondMulti - getNumer(rat2) * firstMulti;
    const denom = multi;
    return { numer, denom };
  }

  const multi = getGcd(getDenom(rat1), getDenom(rat2));
  const denom = getDenom(rat1) * multi;
  const firstMulti = denom / getDenom(rat1);
  const secondMulti = denom / getDenom(rat2);
  const numer = getNumer(rat1) * firstMulti - getNumer(rat2) * secondMulti;

  return { numer, denom };
};

const rat1 = makeRational(3, 9);
const rat2 = makeRational(10, 3);

const rat3 = makeRational(-4, 16);
const rat4 = makeRational(12, 5);

const rat5 = makeRational(1, 15);
const rat6 = makeRational(4, 25);

console.log(getNumer(rat1), getNumer(rat2));
console.log(getDenom(rat1), getDenom(rat2));
console.log(add(rat5, rat6));
console.log(sub(rat5, rat6));
console.log(ratToString(rat1));
console.log(ratToString(rat3));
