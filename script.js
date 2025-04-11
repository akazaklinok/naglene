// Подсветка карточек при наведении
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });

  // Клик ведет к футеру
  card.addEventListener('click', () => {
    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
  });
});

// Сообщение при нажатии на соц. иконки
document.querySelectorAll('.social-icons img').forEach(icon => {
  icon.addEventListener('click', () => {
    alert('Открытие соцсети...');
  });
});

// Лайк-анимация (сердечко)
document.querySelectorAll('.heart-container .checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      console.log('Понравилось!');
    } else {
      console.log('Убрали из избранного.');
    }
  });
});
