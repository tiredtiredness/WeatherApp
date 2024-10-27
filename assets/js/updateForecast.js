import { oneDayForecast, fiveDaysForecast } from './weatherData.js';

const iconPath = 'assets/images/icons/'; // путь для иконки погоды

let forecastType = document.querySelector('.is-active').textContent; // выбор прогноза на день или 5 дней

function setForecast() {
  const weatherNode = document.querySelector('.day-hour-weather');
  weatherNode.innerHTML = '';

  if (forecastType === 'на 24 часа') {
    oneDayForecast.forEach(item =>
      weatherNode.insertAdjacentHTML(
        'beforeend',
        `<li class="day-hour-weather__item"><time>${item.time}</time>
          <img src="${iconPath}${item.weather}.svg">
          <p>${item.temperature}°</p>
          </li>`
      )
    );
  } else if (forecastType === 'на 5 дней') {
    fiveDaysForecast.forEach(item =>
      weatherNode.insertAdjacentHTML(
        'beforeend',
        `<li class="day-hour-weather__item"><p>${item.date}</p>
            <img src="${iconPath}${item.weather}.svg">
            <p>от ${item.temperature[0]}° до ${item.temperature[1]}°</p>
            </li>`
      )
    );
  }
}

export function updateForecast() {
  const buttons = document.querySelectorAll('.slider__menu-item');

  setForecast();

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(button => button.classList.remove('is-active'));
      button.classList.add('is-active');
      forecastType = button.textContent;
      setForecast();
    });
  });
}
