const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

const getX = (point) => point.x;

const getY = (point) => point.y;

const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

/*======================================================================*/

const point = makeDecartPoint(-4, 3);

const makeRectangle = (point, width, height) => {
  const rectangle = { point, width, height };
  return rectangle;
};

const getStartPoint = (rectangle) => rectangle.point;
const getWidth = (rectangle) => rectangle.width;
const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
  // Нужны только две вершины: начальная и лежащая по диагонали
  const top1 = getStartPoint(rectangle);
  const top2 = { x: getX(top1) + getWidth(rectangle), y: getY(top1) - getHeight(rectangle) };

  // Если вершины лежат в плосткостях 2 и 4 , то две другие будут в плосткостях 1 и 3, это значит, что точка (0, 0) лежит внутри прямоугольника
  return getQuadrant(top1) === 2 && getQuadrant(top2) === 4;
};

const rectangle = makeRectangle(point, 5, 4);

console.log(containsOrigin(rectangle));
