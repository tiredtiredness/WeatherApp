import { weatherData } from './weatherData.js';

function calcPercentageBarImage(value, maxValue) {
  const imagePath = '/assets/images/bars/bar-';
  const percent = Math.round((value * 100) / maxValue);

  if (percent > 75) return `${imagePath}100.svg`;
  else if (percent > 50) return `${imagePath}75.svg`;
  else if (percent > 25) return `${imagePath}50.svg`;
  else if (percent > 0) return `${imagePath}25.svg`;
  else return `${imagePath}0.svg`;
}

function calcPressureBarImage(value) {
  const imagePath = 'assets/images/bars/pressure-';
  if (value === 760) return `${imagePath}normal.svg`;
  if (value > 760) return `${imagePath}high.svg`;
  if (value < 760) return `${imagePath}low.svg`;
}

export function updateWeatherDetails() {
  for (const param in weatherData) {
    const detailNode = document.getElementById(param).children;
    const [detailHeaderNode, detailDescriptionNode] = detailNode;

    // значение
    const detailValueNode = detailHeaderNode.querySelector('.detail__value');

    // описание 
    const detailDescriptionValueNode = detailDescriptionNode.querySelector(
      '.detail__description-value'
    );
    const description = weatherData[param].description;
    // шкала
    const detailDescriptionBarNode =
      detailDescriptionNode.querySelector('.detail__bar');

    // значение параметра
    switch (param) {
      case 'humidity':
        detailValueNode.textContent = `${weatherData[param].value} %`;
        break;
      case 'visibility':
        detailValueNode.textContent = `${weatherData[param].value} км`;
        break;
      case 'wind':
        detailValueNode.textContent = `${weatherData[param].value} м/с`;
        break;
      default:
        detailValueNode.textContent = weatherData[param].value;
        break;
    }

    // описание параметра
    if (description) {
      switch (param) {
        case 'humidity':
          detailDescriptionBarNode.src = calcPercentageBarImage(
            weatherData[param].value,
            100
          );
          break;
        case 'pressure':
          detailDescriptionBarNode.src = calcPressureBarImage(
            weatherData[param].value
          );
          break;
        case 'visibility':
          detailDescriptionBarNode.src = calcPercentageBarImage(
            weatherData[param].value,
            110
          );
          detailDescriptionValueNode.textContent = description;
          break;
        case 'sunrise':
          detailDescriptionValueNode.textContent = `Прошло: ${description}`;
          break;
        case 'sunset':
          detailDescriptionValueNode.textContent = `Осталось: ${description}`;
          break;
        default:
          detailDescriptionValueNode.textContent = description;
          break;
      }
    }
  }
}
