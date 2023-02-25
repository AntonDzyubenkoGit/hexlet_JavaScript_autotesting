// Функция calculateDistance, которая находит расстояние между двумя точками на плоскости

const getMidpoint = (point1, point2) => {
  const x = (point1.x + point2.x) / 2;
  const y = (point1.y + point2.y) / 2;

  return {x, y};
};

const point1 = { x: -1, y: 10 };
const point2 = { x: 0, y: -3 };
const point3 = getMidpoint(point1, point2);

console.log(point3);
