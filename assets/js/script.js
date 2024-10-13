import { weatherData } from './weatherData.js';

console.log(weatherData);

for (const param in weatherData) {
  console.log(param === 'humidity');
  const detailNode = document.getElementById(param).children;
  const [detailHeaderNode, detailDescriptionNode] = detailNode;
  const detailValueNode = detailHeaderNode.querySelector('.detail__value');
  const detailDescriptionValueNode = detailDescriptionNode.querySelector(
    '.detail__description-value'
  );
  const description = weatherData[param].description;

  // значение параметра
  if (param === 'humidity') {
    detailValueNode.textContent = `${weatherData[param].value} %`;
  } else if (param === 'visibility') {
    detailValueNode.textContent = `${weatherData[param].value} км`;
  } else if (param === 'wind') {
    detailValueNode.textContent = `${weatherData[param].value} м/с`;
  } else {
    detailValueNode.textContent = weatherData[param].value;
  }

  // описание параметра
  if (description) {
    // в дальнейшем если нужно будет вычислять время
    //то можно просто поменять строку на вычисление
    if (param === 'sunrise') {
      detailDescriptionValueNode.textContent = `Прошло: ${description}`;
    } else if (param === 'sunset') {
      detailDescriptionValueNode.textContent = `Осталось: ${description}`;
    } else {
      detailDescriptionValueNode.textContent = description;
    }
  }
}

const inputNode = document.getElementById('city-input');

inputNode.addEventListener('input', e => {
  console.log(e.target.value);
});
