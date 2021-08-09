// NAV: HOME
$('#navHome').click(function () {
  // NAV BAR LINK COLOR
  $('#navHome').addClass('navActiveLink');

  // NAV BAR: NOT ACTIVE
  $('#navAbout').removeClass('navActiveLink');
  $('#navWork').removeClass('navActiveLink');
  $('#navContact').removeClass('navActiveLink');
  $('#navResume').removeClass('navActiveLink');

  // SECTION: SHOW
  $('#large-image').removeClass('hidden');

  // SECTION HIDE
  $('#master-about').addClass('hidden');
  $('#master-work').addClass('hidden');
  $('#master-contact').addClass('hidden');
  $('#master-resume').addClass('hidden');
});

// NAV: ABOUT
$('#navAbout').click(function () {
  // NAV BAR LINK COLOR
  $('#navAbout').addClass('navActiveLink');

  // NAV BAR: NOT ACTIVE
  $('#navHome').removeClass('navActiveLink');
  $('#navWork').removeClass('navActiveLink');
  $('#navContact').removeClass('navActiveLink');
  $('#navResume').removeClass('navActiveLink');

  // SECTION: SHOW
  $('#master-about').removeClass('hidden');

  // SECTION HIDE
  $('#large-image').addClass('hidden');
  $('#master-work').addClass('hidden');
  $('#master-contact').addClass('hidden');
  $('#master-resume').addClass('hidden');
});

// NAV: WORK
$('#navWork').click(function () {
  // NAV BAR: ACTIVE
  $('#navWork').addClass('navActiveLink');

  // NAV BAR: NOT ACTIVE
  $('#navHome').removeClass('navActiveLink');
  $('#navAbout').removeClass('navActiveLink');
  $('#navContact').removeClass('navActiveLink');
  $('#navResume').removeClass('navActiveLink');

  // SECTION: SHOW
  $('#master-work').removeClass('hidden');

  // SECTION: HIDE
  $('#large-image').addClass('hidden');
  $('#master-about').addClass('hidden');
  $('#master-contact').addClass('hidden');
  $('#master-resume').addClass('hidden');
});

// NAV: CONTACT
$('#navContact').click(function () {
  // NAV BAR: ACTIVE
  $('#navContact').addClass('navActiveLink');

  // NAV BAR: NOT ACTIVE
  $('#navHome').removeClass('navActiveLink');
  $('#navAbout').removeClass('navActiveLink');
  $('#navWork').removeClass('navActiveLink');
  $('#navResume').removeClass('navActiveLink');

  // SECTION: SHOW
  $('#master-contact').removeClass('hidden');

  // SECTION: HIDE
  $('#large-image').addClass('hidden');
  $('#master-about').addClass('hidden');
  $('#master-work').addClass('hidden');
  $('#master-resume').addClass('hidden');
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

// MODEL RESUME ----------------------------------------------

// To Create Modal On Image Click
var myModalResume = new bootstrap.Modal($('#resume-modal'), {});

$('#navResume').click(function (e) {
  myModalResume.show();
});

// To Open Repo Page
// $('#resume-download-btn').click(function (e) {
//   // browser.downloads.download({ href: 'assets/documents/Mehdi Mehrabani Resume.pdf' });
// });

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
