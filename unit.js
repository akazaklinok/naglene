



/*Подсветка карточек категорий при наведении и скролл*/
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });

  card.addEventListener('click', () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


/*Сообщения при клике на соц. иконки*/
document.querySelectorAll('.social-icons img').forEach(icon => {
  icon.addEventListener('click', () => {
    alert('Переход на социальную сеть...');
  });
});


document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', event => {
    const productCard = event.target.closest('.product-card');
    const productImage = productCard.querySelector('img');
    const cart = document.querySelector('.cart-icon'); // Элемент корзины

      /* Клонируем изображение*/
    const flyingImage = productImage.cloneNode(true);
    flyingImage.classList.add('fly-image');
    document.body.appendChild(flyingImage);

     /*Получаем координаты*/
    const imageRect = productImage.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

      /* Устанавливаем начальные координаты*/
    flyingImage.style.left = `${imageRect.left}px`;
    flyingImage.style.top = `${imageRect.top}px`;
    flyingImage.style.width = `${imageRect.width}px`;
    flyingImage.style.height = `${imageRect.height}px`;

    /* Задержка для применения начальных стилей*/
    requestAnimationFrame(() => {
      // Вычисляем смещение*/
      const deltaX = cartRect.left - imageRect.left;
      const deltaY = cartRect.top - imageRect.top;

       /*Применяем трансформацию*/
      flyingImage.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.1)`;
      flyingImage.style.opacity = '0';
    });

      /*Удаляем изображение после анимации*/
    flyingImage.addEventListener('transitionend', () => {
      flyingImage.remove();
        /* Здесь можно добавить логику добавления товара в корзину*/
    });
  });
});
