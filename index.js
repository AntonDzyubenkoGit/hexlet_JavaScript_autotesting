const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

const getX = (point) => point.x;

const getY = (point) => point.y;

// Функция makeSegment(). Принимает на вход две точки и возвращает отрезок.
// Функция getMidpointOfSegment(). Принимает на вход отрезок и возвращает точку находящуюся на середине отрезка.
// Функция getBeginPoint(). Принимает на вход отрезок и возвращает точку начала отрезка.
// Функция getEndPoint(). Принимает на вход отрезок и возвращает точку конца отрезка.

const makeSegment = (begin, end) => ({ begin, end });

const getMidpointOfSegment = (segment) => {
  const { begin, end } = segment;
  const x = (getX(begin) + getX(end)) / 2;
  const y = (getY(begin) + getY(end)) / 2;

  return makeDecartPoint(x, y);
};

const getBeginPoint = (segment) => segment.begin;

const getEndPoint = (segment) => segment.end;

const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);

const segment = makeSegment(makeDecartPoint(3, 2), makeDecartPoint(0, 0));

console.log(segment);
console.log(getMidpointOfSegment(segment));
console.log(getBeginPoint(segment));
console.log(getEndPoint(segment));
