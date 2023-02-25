const makePoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt(x ** 2 + y ** 2),
  };

  return point;
};

const x = 4;
const y = 8;
const point = makePoint(x, y);

// Функции getX(), getY() - интерфейсные функции точек

const getX = (point) => {
  const { angle, radius } = point;
  const x = radius * Math.cos(angle);

  return Math.round(x);
};

const getY = (point) => {
  const { angle, radius } = point;
  const y = radius * Math.sin(angle);

  return Math.round(y);
};

console.log(getX(point));
console.log(getY(point));

// Решение с получением радиуса и угла в функциях getRadius(), getAngle()
const getRadius = (point) => point.radius;
const getAngle = (point) => point.angle;
const getX1 = (point) => Math.round(getRadius(point) * Math.cos(getAngle(point)));
const getY1 = (point) => Math.round(getRadius(point) * Math.sin(getAngle(point)));

console.log(getX1(point));
console.log(getY1(point));
