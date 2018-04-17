displayMenu('.button');
displayMenu('.close');

function displayMenu(e) {
  $(e).click(function() {
    $('.list').toggleClass('active');
  });
}

$('main').click(function() {
  if ($('.list').hasClass('active')) {
    $('.list').toggleClass('active');
  }
});
