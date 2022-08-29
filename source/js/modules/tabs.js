const tabs = document.querySelectorAll('.tabs__item');

const nextTab = (evt) => {
  if (!evt.target.classList.contains('tabs__item--current')) {
    tabs.forEach((tab) => {
      tab.classList.remove('tabs__item--current');
    });
  }
  evt.target.classList.add('tabs__item--current');
};

tabs.forEach((tab) => {
  tab.addEventListener('click', nextTab);
});
