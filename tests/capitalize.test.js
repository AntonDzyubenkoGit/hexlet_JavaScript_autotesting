import { capitalize } from "../src/capitalize.js";

if (capitalize("hello") !== "Hello") {
  throw new Error("Функция работает неверно!");
}
if (capitalize("") !== "") {
  throw new Error("Это не пустая строка!!!");
}

console.log(capitalize("Удачное выполнение!!!"));
