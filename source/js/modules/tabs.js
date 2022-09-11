const tabs = document.querySelectorAll('.tabs__input');
const tabsList = document.querySelectorAll('.tabs__list');

tabsList[0].style.display = 'grid';


const nextTab = (evt) => {

  if (!evt.target.classList.contains('tabs__input--current')) {
    tabs.forEach((tab) => {
      tab.classList.remove('tabs__input--current');
    });
  }

  evt.target.classList.add('tabs__input--current');


  if (evt.target.classList.contains('tabs__input--1')) {
    tabsList[0].style.display = 'grid';
  } else {
    tabsList[0].style.display = 'none';
  }

  if (evt.target.classList.contains('tabs__input--2')) {
    tabsList[1].style.display = 'grid';
  } else {
    tabsList[1].style.display = 'none';
  }

  if (evt.target.classList.contains('tabs__input--3')) {
    tabsList[2].style.display = 'grid';
  } else {
    tabsList[2].style.display = 'none';
  }
};


tabs.forEach((tab) => {
  tab.addEventListener('click', nextTab);
});
