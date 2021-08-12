///////////////////////////////////////////////////////////////
// NAV Color Change + Section Hide & Unhide
///////////////////////////////////////////////////////////////

$('nav ul li a').click(function () {
  var navLinks = $('nav ul li a');
  var navSection = $(this).attr('href');

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
    $(navSection).removeClass('hidden');
  }
});

///////////////////////////////////////////////////////////////
// MODAL WINDOWS
///////////////////////////////////////////////////////////////

// MODEL WORK 1 ----------------------------------------------

// To Create Modal On Image Click
var myModal1 = new bootstrap.Modal($('#work-1-modal'), {});

$('#work-image-1').click(function (e) {
  myModal1.show();
});

// To Open Repo Page
$('#work-1-btn-repo').click(function () {
  window.open('https://github.com/mmehr1988/symmetrical-waddle');
});

// To Open App Live
$('#work-1-btn-app').click(function () {
  window.open('https://mmehr1988.github.io/symmetrical-waddle/');
});

// MODEL WORK 2 ----------------------------------------------

// To Create Modal On Image Click
var myModal2 = new bootstrap.Modal($('#work-2-modal'), {});

$('#work-image-2').click(function (e) {
  myModal2.show();
});

// To Open Repo Page
$('#work-2-btn-repo').click(function () {
  window.open('https://github.com/mmehr1988/miniature-telegram');
});

// To Open App Live
$('#work-2-btn-app').click(function () {
  window.open('https://mmehr1988.github.io/miniature-telegram/');
});

// MODEL WORK 3 ----------------------------------------------

// To Create Modal On Image Click
var myModal3 = new bootstrap.Modal($('#work-3-modal'), {});

$('#work-image-3').click(function (e) {
  myModal3.show();
});

// To Open Repo Page
$('#work-3-btn-repo').click(function () {
  window.open('https://github.com/mmehr1988/legendary-meme');
});

// To Open App Live
$('#work-3-btn-app').click(function () {
  window.open('https://mmehr1988.github.io/legendary-meme/');
});

// MODEL WORK 4 ----------------------------------------------

// To Create Modal On Image Click
var myModal4 = new bootstrap.Modal($('#work-4-modal'), {});

$('#work-image-4').click(function (e) {
  myModal4.show();
});

// To Open Repo Page
$('#work-4-btn-repo').click(function () {
  window.open('https://github.com/mmehr1988/automatic-doodle');
});

// To Open App Live
$('#work-4-btn-app').click(function () {
  window.open('https://mmehr1988.github.io/automatic-doodle/');
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
