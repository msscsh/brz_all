document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const newsItems = document.querySelectorAll('.news-card');

  function showNews(index) {
    // Oculta todas as notícias
    newsItems.forEach(item => {
      item.style.display = 'none';
    });

    // Exibe a notícia com o índice atual
    newsItems[index].style.display = 'block';
  }

  function nextNews() {
    currentIndex = (currentIndex + 1) % newsItems.length;
    showNews(currentIndex);
  }

  showNews(currentIndex);
  setInterval(nextNews, 7000);
});
