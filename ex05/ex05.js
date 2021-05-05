$(document).ready(() => {
  $('.category-container > .category-links').each(function () {
    const title = $(this)
      .find('.feature > a[data-testid="mainCategory"]')
      .text()
      .split(' ')[0];

    $(`<span>${title} - </span>`).prependTo(
      $(this).find('#category-list-container.sub-category > li > a')
    );
  });
});
