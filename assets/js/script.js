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

// Loop work-images and open the modal window
$('.work-image').click(function () {
  var workModalParent = $(this).parents().children('div')[1].id;
  // To find the number of the work number clicked
  var workModalId = String(`#${workModalParent}`);
  // To Open Modal Window
  var myModal = new bootstrap.Modal($(workModalId), {});
  myModal.show();

  $('.btn-modal').click(function () {
    var workName = $(this).attr('name');
    var workRepoLink = String(`https://github.com/mmehr1988/${workName}`);
    var workAppLink = String(`https://mmehr1988.github.io/${workName}`);

    if ($(this).hasClass('btn-repo') === true) {
      // To Open Repo Page
      window.open(workRepoLink);
    } else {
      // To Open App Page
      window.open(workAppLink);
    }
  });

  // To Close Modal
  $('.btn-close').click(function () {
    myModal.hide();
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
