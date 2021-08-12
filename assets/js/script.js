///////////////////////////////////////////////////////////////
// NAV COLOR CHANGE + SECTION HIDE & UNHIDE
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

$('#work-image-1, #work-image-2, #work-image-3, #work-image-4').click(function (e) {
  var modalNum = $(this)[0].id.substr(-1);
  var workModal = String(`#work-${modalNum}-modal`);
  var workRepoBtn = String(`#work-${modalNum}-btn-repo`);
  var workAppBtn = String(`#work-${modalNum}-btn-app`);

  var workName = $(this).attr('value');
  var workRepoLink = String(`https://github.com/mmehr1988/${workName}`);
  var workAppLink = String(`https://mmehr1988.github.io/${workName}`);

  // To Open Modal
  var myModal = new bootstrap.Modal($(workModal), {});
  myModal.show();

  // To Open Repo Page
  $(workRepoBtn).click(function () {
    window.open(workRepoLink);
  });

  // To Open App Page
  $(workAppBtn).click(function () {
    window.open(workAppLink);
  });
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
