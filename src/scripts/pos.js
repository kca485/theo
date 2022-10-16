function initShareButton() {
  if (!navigator.share) {
    return;
  }

  const shareButton = document.createElement('button');
  shareButton.textContent = 'Bagikan';

  shareButton.addEventListener('click', () => {
    navigator.share({
      url: location.href,
      title: document.title,
    });
  });

  const story = document.getElementById('story-body');
  story.append(shareButton);
}

window.addEventListener('DOMContentLoaded', () => {
  initShareButton();
});