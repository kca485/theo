function createShareButton() {
  if (!navigator.share) {
    return;
  }

  const shareButton = document.createElement('button');
  shareButton.textContent = 'Bagikan';
  shareButton.id = 'share-button'

  shareButton.addEventListener('click', function() {
    navigator.share({
      url: location.href,
      title: document.title,
    });
  });

  return shareButton;
}

function createCopyLinkButton() {
  if (!navigator.clipboard) {
    return;
  }

  const copyLinkButton = document.createElement('button');
  copyLinkButton.textContent = 'Salin tautan';
  copyLinkButton.id = 'copy-link-button';

  copyLinkButton.addEventListener('click', function() {
    navigator.clipboard.writeText(location.href).then(function() {
      alert('Tautan tersalin.');
    });
  });

  return copyLinkButton;
}

function createArticleFooter() {
  if (!arguments.length) {
    return
  }

  const articleFooter = document.createElement('footer');

  for (let i = 0; i < arguments.length; i++) {
    if (!arguments[i]) {
      continue;
    }

    articleFooter.appendChild(arguments[i]);
  }

  return articleFooter;
}

window.addEventListener('DOMContentLoaded', function() {
  const shareButton = createShareButton();
  const copyLinkButton = createCopyLinkButton();

  if (shareButton || copyLinkButton) {
    const articleFooter = createArticleFooter(shareButton, copyLinkButton);

    const story = document.getElementById('story-body');
    story.appendChild(articleFooter);
  }
});