var projectView = {};
//----------------------------------------------------
//menu Nav
//----------------------------------------------------

// projectView.handleMainNav = function() {
//   $('.main-nav').on('click', '.tab', function() {
//     $('.tab-content').hide();
//     $('.modal-overlay').hide();
//
//     // $('.homeBackground').hide();
//     var tabName= '#' + $(this).attr('data-content');
//     $(tabName).show();
//   })
// };

// ----------------------------------------------------
// modal
// ----------------------------------------------------

projectView.modalOverlay = function() {
  $('.icon.icon-menu').on('click', function(event) {
    event.preventDefault();
  $('.modal-overlay').addClass('is-visible');
  $('.modal-overlay.is-visible').show();
  })
};

projectView.hideModalOverlay = function() {
  $('.icon-cross').on('click', function(event) {
    event.preventDefault();
    $('.modal-overlay').hide();
  })
};

// ----------------------------------------------------
// Initial Load for project data
// ----------------------------------------------------
projectView.initPage = function() {
  Project.all.forEach(function(project) {
    $('#projects').append(project.toHTML())
  });
}




$(document).ready(function() {
// projectView.handleMainNav ();
projectView.modalOverlay ();
projectView.hideModalOverlay();
Project.fetchAll();
// Project.prototype.toHtml();
});
