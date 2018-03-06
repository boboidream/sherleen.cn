particlesJS.load("particles-js",'/scripts/snowflakes.json')

$('h1').on('mouseenter', function () {
    var $links = $('.links'),
        $contact = $('.contact')
    
    $links.hide()
    $contact.stop().fadeIn()
  })

$('.info-wrapper').on('mouseleave', function () {
    var $links = $('.links'),
        $contact = $('.contact')
    
    $contact.hide()
    $links.stop().fadeIn()
  })
