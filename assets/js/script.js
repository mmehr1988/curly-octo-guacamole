///////////////////////////////////////////////////////////////
// NAV COLOR CHANGE + SECTION HIDE & UNHIDE
///////////////////////////////////////////////////////////////

$('nav ul li a').click(function () {
  var navLinks = $('nav ul li a');

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
  }
});

///////////////////////////////////////////////////////////////
// NAV TOGGLER
///////////////////////////////////////////////////////////////

// TO COLLAPSE AFTER CLICK -----------------------------------

$('#navbar-toggler').on('click', function () {
  if ($('#navbar-toggler')[0].ariaExpanded) {
    $('.navbar-nav>li>a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  }
});
