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
// MODAL WINDOWS
///////////////////////////////////////////////////////////////

// Click event for portfolio images
$('.work-image').click(function () {
  // Traversing back to parent element and moving down to the second div where the modal id can be targeted
  var workModalParent = $(this).parents().children('div')[1].id;

  // To convert the id into jQuery
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
      window.open(workRepoLink, '_blank');
    } else {
      // To Open App Page
      window.open(workAppLink, '_blank');
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
