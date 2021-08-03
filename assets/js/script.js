document.addEventListener('DOMContentLoaded', init);

var hoverBox = document.getElementById('hover-box');
var audioBox = document.getElementById('audio-box');
var colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

let load = 0;
let totalSquares = 64;

// Function to creat DOM Elements >>>> square colors + Audio
function init() {
  for (let i = 0; i < totalSquares; i++) {
    let square = document.createElement('div');
    let audioSquare = document.createElement('audio');
    let fn = `audio-${i}`;
    let src = './assets/audio/' + fn + '.mp3';

    square.classList.add('square');

    audioSquare.setAttribute('data-file', fn);
    audioSquare.setAttribute('src', src);
    audioSquare.volume = 0.2;

    // to create DOM square element
    hoverBox.appendChild(square);
    // to create DOM audio element
    audioBox.appendChild(audioSquare);
  }
}

// Function to set colors of each square when called
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// Function to choose random color for each square
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

///////////////////////////////////////////////////////////////
// RANDOM PIANO PLAY
///////////////////////////////////////////////////////////////

let noteTicker;
$('#btnPlay').click(function () {
  noteTicker = setInterval(autoAudioPlay, 62);
});

///////////////////////////////////////////////////////////////
// EVENT LISTENERS
///////////////////////////////////////////////////////////////

// To Switch between Loading Page & Main Page
$('#btnEnter').click(function () {
  $('#page-load').addClass('hidden');
  $('#main-header').removeClass('hidden');
  $('#large-image').removeClass('hidden');
  $('#main-page').removeClass('hidden');
  $('#footer').removeClass('hidden');
  $('#enterMsg').addClass('hidden');
  $('body').addClass('light');
  clearInterval(noteTicker);
});

// Main Page Toggle Mode
$('#toggleDarkMode').click(function (e) {
  if (!$('body').hasClass('light')) {
    // HTML
    $('body').addClass('light');

    // TOGGLE BUTTON
    $('#toggleDarkMode').html('Dark');
    $('#toggleDarkMode').addClass('btn-dark');
    $('#toggleDarkMode').removeClass('btn-light');

    // SECTION: ABOUT
    $('#section-about').addClass('text-light');
    $('#master-about').addClass('bg-dark');
    $('#master-about').removeClass('bg-light');

    // SECTION: WORK
    $('#master-work').addClass('bg-dark');
    $('#master-work').removeClass('bg-light');

    // SECTION: CONTACT
    $('#master-contact').addClass('bg-dark');
    $('#master-contact').removeClass('bg-light');

    // SECTION: FOOTER
    $('#footer').addClass('bg-dark');
    $('#footer').removeClass('bg-light');
  } else {
    // HTML
    $('body').removeClass('light');

    // TOGGLE BUTTON
    $('#toggleDarkMode').html('Light');
    $('#toggleDarkMode').removeClass('btn-dark');
    $('#toggleDarkMode').addClass('btn-light');

    // SECTION: ABOUT
    $('#section-about').removeClass('text-light');
    $('#master-about').removeClass('bg-dark');
    $('#master-about').addClass('bg-light');

    // SECTION: WORK
    $('#master-work').removeClass('bg-dark');
    $('#master-work').addClass('bg-light');

    // SECTION: CONTACT
    $('#master-contact').removeClass('bg-dark');
    $('#master-contact').addClass('bg-light');

    // SECTION: FOOTER
    $('#footer').removeClass('bg-dark');
    $('#footer').addClass('bg-light');
  }
});

///////////////////////////////////////////////////////////////
// AUTIO PLAY NOTES
///////////////////////////////////////////////////////////////

// Function To Auto Play Notes
// Once all squares are colored, user can enter portfolio
function autoAudioPlay() {
  // Sets invertval funtions to actively update page content
  let randomNote = Math.floor(Math.random() * totalSquares);
  audioBox.children[randomNote].play();
  setColor(hoverBox.children[randomNote]);

  // to target the children of the parentElement of square colors
  let list = hoverBox.childNodes;
  // initial number of squares with color styling
  let confirmList = 0;

  // count for when all squares have color based on DOM attributes length
  // if css style = color is added, length becomes greater than 1
  list.forEach(function (v, i, r) {
    if (hoverBox.childNodes[i].attributes.length > 1) {
      // counter for when the loop recognizes a square has color
      confirmList++;
    }
  });

  // if statement to check when all squares have color
  if (confirmList === 64) {
    // Once all squares have color show the enter message
    $('#enterMsg').removeClass('hidden');

    // once all squares have color click on the enter main page button that is hidden
    setTimeout(function () {
      $('#btnEnter').click();
    }, 2000);
  }
}

// STICKY NAV SCROLL COLOR CHANGE -------------------------------------------------------

// SECTION: HOME PAGE
$(document).ready(function () {
  $(window).scroll(function () {
    var aboutSecTop = $('#master-about').position().top;
    var scrollTop = $(window).scrollTop();
    if (!(scrollTop < aboutSecTop - 30)) {
      $('#navHome').removeClass('text-dark');
      $('#navHome').addClass('text-light');
      navAboutColor();
      navWorkColor();
      navContactColor();
    } else {
      $('#navHome').addClass('text-dark');
      $('#navHome').removeClass('text-light');
      navAboutColor();
      navWorkColor();
      navContactColor();
    }
  });
});

// SECTION: ABOUT
function navAboutColor() {
  const aboutScrollTop = $(window).scrollTop() - $('#master-about').position().top > -10;
  const aboutScrollHeight = $(window).scrollTop() - $('#master-about').position().top < $('#master-about').height();

  if (aboutScrollTop && aboutScrollHeight) {
    $('#navAbout').removeClass('text-light');
    $('#navAbout').addClass('text-dark');
  } else {
    $('#navAbout').addClass('text-light');
    $('#navAbout').removeClass('text-dark');
  }
}

// SECTION: WORK
function navWorkColor() {
  const workScrollTop = $(window).scrollTop() - $('#master-work').position().top > -10;
  const workScrollHeight = $(window).scrollTop() - $('#master-work').position().top < $('#master-work').height() - 200;

  if (workScrollTop && workScrollHeight) {
    $('#navWork').removeClass('text-light');
    $('#navWork').addClass('text-dark');
  } else {
    $('#navWork').addClass('text-light');
    $('#navWork').removeClass('text-dark');
  }
}

// SECTION: CONTACT
function navContactColor() {
  const contactScrollTop = $(window).scrollTop() - $('#master-contact').position().top + 300 > -10;
  const contactScrollHeight = $(window).scrollTop() - $('#master-contact').position().top < $('#master-contact').height();

  if (contactScrollTop && contactScrollHeight) {
    $('#navContact').removeClass('text-light');
    $('#navContact').addClass('text-dark');
  } else {
    $('#navContact').addClass('text-light');
    $('#navContact').removeClass('text-dark');
  }
}

// NAV TOGGLER TO COLLAPSE AFTER CLICK ------------------------------------------------

$('#navbar-toggler').on('click', function () {
  if ($('#navbar-toggler')[0].ariaExpanded) {
    $('.navbar-nav>li>a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  }
});
