const accordionItems = document.querySelectorAll('.card__item-header');
const accordionContent = document.querySelectorAll('.card__item-content');


accordionItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('card__item-active')) {
      item.classList.remove('card__item-active');
      accordionContent[index].classList.add('hidden');
    } else {

      accordionItems.forEach((elem) => {
        elem.classList.remove('card__item-active');
      });
      accordionContent.forEach((elem) => {
        elem.classList.add('hidden');
      });
      item.classList.add('card__item-active');
      accordionContent[index].classList.remove('hidden');
    }
  });
});
