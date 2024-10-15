export function setupCityInputListener() {
  const inputNode = document.getElementById('city-input');
  const inputIconNode = document.getElementById('city-input-icon');

  // изменение иконки у инпута
  inputNode.addEventListener('input', e => {
    inputIconNode.style.backgroundImage = e.target.value
      ? 'url(assets/images/icons/cross.svg)'
      : 'url(assets/images/icons/magnifier.svg)';
  });

  // очищение инпута при клике на крестик
  inputIconNode.addEventListener('click', function (e) {
    if (inputIconNode.style.backgroundImage.includes('cross')) {
      inputNode.value = '';
      inputIconNode.style.backgroundImage =
        'url(assets/images/icons/magnifier.svg)';
    }
  });
}
