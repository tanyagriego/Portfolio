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
    $('.modal-overlay').hide();

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

function hideModalOverlay() {
  $('.icon-cross').on('click', function(event) {
    event.preventDefault();
    $('.modal-overlay').hide();
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
//JSON
//----------------------------------------------------

// Project.fetchAll = function() {
//   if (localStorage.projectsData) {
//   Project.loadAll(JSON.parse(localStorage.projectsData));
//   projectsView.initPage();
//   } else {
//   console.log("localStorage doesn't exist");
//   $.getJSON("/data/portfolioJSON.json", function(data) {
//     localStorage.setItem ('portfolioData', JSON.stringify(data));
//     Portfolio.loadAll(data);
//     portfolioView.initPage();
//     })
//   }
// };
//----------------------------------------------------
//call functions
//----------------------------------------------------

$(document).ready(function() {
handleMainNav ();
modalOverlay ();
hideModalOverlay();
// Project.prototype.toHtml();
});
