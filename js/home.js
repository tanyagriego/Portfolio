var projectArtciles= [];

function Project (projectInfo) {
  this.title= projectInfo.title;
  this.image= projectInfo.image;
  this.link= projectInfo.link;
  this.date= projectInfo.date;
  this.description= projectInfo.description;
  this.technologies= projectInfo.technologies;
  this.repo= projectInfo.repo;
};

//----------------------------------------------------
//menu Nav
//----------------------------------------------------

function handleMainNav() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    // $('.homeBackground').hide();
    var tabName= '#' + $(this).attr('data-content');
    $(tabName).show();
  })
};

// ----------------------------------------------------
// modal
// ----------------------------------------------------

function modalOverlay() {
  $('.icon.icon-menu').on('click', function(event) {
    event.preventDefault();
  $('.modal-overlay').addClass('is-visible');
  $('.modal-overlay.is-visible').show();
  })
};
//----------------------------------------------------
//handlebars template
//----------------------------------------------------

Project.prototype.toHtml= function() {
var templateFiller= Handlebars.compile( $('#project-templateHB').html() );
var filledTemplate= templateFiller(this);
return filledTemplate;
}

//----------------------------------------------------
//js for new projects
//----------------------------------------------------

projects.forEach(project => {
  projectArtciles.push (new Project (project));
});

projectArtciles.forEach(project => {
$('#projects').append(project.toHtml());
});

//----------------------------------------------------
//call functions
//----------------------------------------------------

$(document).ready(function() {
handleMainNav ();
modalOverlay ();
// Project.prototype.toHtml();
});
