particlesJS.load("particles-js",'/scripts/snowflakes.json')

$('h1').on('mouseenter', function () {
    tab('contact')
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
