///////////////////////////////////////////////////////////////
// NAV COLOR CHANGE + SECTION HIDE & UNHIDE
///////////////////////////////////////////////////////////////
$('nav ul li a').click(function () {
  var navLinks = $('nav ul li a');

  // For the page to start at the top on change
  $('html, body').animate({ scrollTop: 0 }, 'slow');

  if ($(this)[0].id !== 'navResume') {
    navLinks.each(function () {
      // Checks if navActiveLink is in any of the nav elements
      if ($(this)[0].className.includes('navActiveLink')) {
        // If true, remove so the class to reset them to black
        $(this).removeClass('navActiveLink');
        $($(this).attr('href')).addClass('hidden');
      }
    });

    // add the class "navActiveLink to the clicked element"
    $(this).addClass('navActiveLink');
    // NAV Link href is the id for each section.
    $($(this).attr('href')).removeClass('hidden');

    // To auto close the collapsed NAV bar
    $('.navbar-collapse').collapse('hide');

    // If navbar toggler icon is visible & clicked nav-toggler-icon is clicked, toggle class ="close" for element header
    if ($('.navbar-toggler-icon').is(':visible')) {
      $('.main-nav').toggleClass('close');
    }
  }
});

///////////////////////////////////////////////////////////////
// NAV COLLAPSE TO ADJUST MAIN SECTION HEIGHT
///////////////////////////////////////////////////////////////
// When the nav-toggler-icon is clicked, toggle class ="close" for element header
// Main Section height based on whether header has class close
$('.navbar-toggler').click(function () {
  $('.main-nav').toggleClass('close');
});
