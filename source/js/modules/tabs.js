const tabs = document.querySelectorAll('.tabs__link');
const prices = document.querySelectorAll('.cards__price-wrapper h3');
const pricesShadow = document.querySelectorAll('.cards__price span');


const nextTab = (evt) => {

  evt.preventDefault();

  if (!evt.target.classList.contains('tabs__link--current')) {
    tabs.forEach((tab) => {
      tab.classList.remove('tabs__link--current');
    });
  }
  evt.target.classList.add('tabs__link--current');
};


const setPrice = (evt) => {
  if (evt.target === tabs[0]) {
    prices[0].textContent = 5000;
    prices[1].textContent = 1700;
    prices[2].textContent = 2700;
    pricesShadow[0].textContent = 5000;
    pricesShadow[1].textContent = 1700;
    pricesShadow[2].textContent = 2700;
  }

  if (evt.target === tabs[1]) {
    prices[0].textContent = 7500;
    prices[1].textContent = 2550;
    prices[2].textContent = 4050;
    pricesShadow[0].textContent = 7500;
    pricesShadow[1].textContent = 2550;
    pricesShadow[2].textContent = 4050;
  }

  if (evt.target === tabs[2]) {
    prices[0].textContent = 10000;
    prices[1].textContent = 3400;
    prices[2].textContent = 5400;
    pricesShadow[0].textContent = 10000;
    pricesShadow[1].textContent = 3400;
    pricesShadow[2].textContent = 5400;
  }
};


tabs.forEach((tab) => {
  tab.addEventListener('click', nextTab);
  tab.addEventListener('click', setPrice);
});
