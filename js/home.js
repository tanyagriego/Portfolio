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

function handleMainNav() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('.homeBackground').hide();
    var tabName= '#' + $(this).attr('data-content');
    $(tabName).show();
  })
};

Project.prototype.toHtml= function() {
var templateFiller= Handlebars.compile( $('#project-templateHB').html() );
var filledTemplate= templateFiller(this);
return filledTemplate;
}

projects.forEach(project => {
  projectArtciles.push (new Project (project));
});

projectArtciles.forEach(project => {
$('#projects').append(project.toHtml());
});

$(document).ready(function() {
handleMainNav ();
// Project.prototype.toHtml();
})
