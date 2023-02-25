// Функция calculateDistance, которая находит расстояние между двумя точками на плоскости

const calculateDistance = (point1, point2) => {
  const ac = point2[0] - point1[0];
  const bc = point2[1] - point1[1];
  const distance = Math.sqrt(ac ** 2 + bc ** 2);

  return distance;
};

const point1 = [1, 10];
const point2 = [1, 3];

console.log(calculateDistance(point1, point2));
