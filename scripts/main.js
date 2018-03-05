particlesJS.load("particles-js",'/scripts/snowflakes.json')

$('h1')
  .on('mouseenter', function () {
    tab('contact')
  })
  .on('click', function () {
    var $links = $('.links')

    if ($links.is(':visible')) {
      tab('contact')
    } else {
      tab('links')
    }
  })

$('.info-wrapper').on('mouseleave', function () {
    tab('links')
  })

function tab(type) {
  var $links = $('.links'),
      $contact = $('.contact')

  if (type === 'links') {
    $contact.hide()
    $links.stop().fadeIn()
  } else {
    $links.hide()
    $contact.stop().fadeIn()
  }
}
