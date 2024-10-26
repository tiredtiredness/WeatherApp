import { weatherData } from './weatherData.js';

const getDetailValue = (param, value) => {
  switch (param) {
    case 'humidity':
      return `${value} %`;
    case 'pressure':
      return `${value}`;
    case 'visibility':
      return `${value} км`;
    case 'sunrise':
      return `${value}`;
    case 'sunset':
      return `${value}`;
    case 'wind':
      return `${value} м/с`;
  }
};

function getInput(value, maxValue, gradient = false) {
  return `
  <input type="range" name="" id="" disabled class="${
    gradient ? 'details__range--gradient' : ''
  } details__range" value="${(value / maxValue) * 100}">
  `;
}

function getDetailDescription(param, value, maxValue = 0, description) {
  switch (param) {
    case 'humidity':
      return `${getInput(value, maxValue)}
      <div class="detail__wrapper--spaced detail__wrapper">
        <p class="detail__description-value">0%</p>
        <p class="detail__description-value">100%</p>
      </div>`;
    case 'pressure':
      return `${getInput(value, maxValue, true)}
      <div class="detail__wrapper--centered detail__wrapper">
        <p class="detail__description-value">${description}</p>
      </div>`;
    case 'visibility':
      return `${getInput(value, maxValue)}
      <div class="detail__wrapper--centered detail__wrapper">
        <p class="detail__description-value">${description}</p>
      </div>`;
    case 'sunrise':
      return `
        <div class="detail__wrapper detail__wrapper--centered">
          <time class="detail__description-value">Прошло: ${description}</time>
        </div>
      `;
    case 'sunset':
      return `
        <div class="detail__wrapper detail__wrapper--centered">
          <time class="detail__description-value">Осталось: ${description}</time>
        </div>
      `;
    case 'wind':
      return `
        <div class="detail__wrapper detail__wrapper--centered">
          <time class="detail__description-value">${description}</time>
        </div>
      `;
  }
}

export function updateWeatherDetails() {
  const detailsListNode = document.querySelector('.details__list');

  for (const item of weatherData) {
    detailsListNode.insertAdjacentHTML(
      'beforeend',
      `
      <li id="${item.param}" class="detail">
              <header class="detail__header">
                <h2 class="detail__title">${item.name}</h2>
                <img src="assets/images/icons/${
                  item.param
                }.svg" alt="Иконка параметра ${item.name.toLowerCase()}" class="detail__image">
                <p class="detail__value">${getDetailValue(
                  item.param,
                  item.value
                )}</p>
              </header>
              <div class="detail__description">
                ${getDetailDescription(
                  item.param,
                  item.value,
                  item.maxValue,
                  item.description
                )}
              </div>
            </li>
      `
    );
  }
}
