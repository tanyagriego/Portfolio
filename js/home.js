'use strict';

function Project (projectInfo) {
  this.title= projectInfo.title;
  this.image= projectInfo.image;
  this.link= projectInfo.link;
  this.date= projectInfo.date;
  this.description= projectInfo.description;
  this.technologies= projectInfo.technologies;
  this.repo= projectInfo.repo;
};

Project.all = [];

//----------------------------------------------------
//handlebars template
//----------------------------------------------------

Project.prototype.toHTML= function() {
var templateFiller= Handlebars.compile( $('#project-templateHB').html() );
var filledTemplate= templateFiller(this);
return filledTemplate;
};

//----------------------------------------------------
//JSON
//----------------------------------------------------
Project.fetchAll = function() {
  if(localStorage.projectInfo) {
    Project.loadAll(JSON.parse(localStorage.projectInfo));
    projectView.initPage();
  } else {
    console.log("localStorage doesn't exist.");
    $.getJSON("/data/projectsJSON.json", function(data) {
      localStorage.setItem('projectInfo', JSON.stringify(data));
      Project.loadAll(data);
      projectView.initPage();
    })
  }
};

Project.loadAll = function(projects){
  projects.forEach(function(project){
    Project.all.push(new Project(project));
  })
};

//----------------------------------------------------
//js for new projects
//----------------------------------------------------

// projects.forEach(project => {
//   projectArticles.push (new Project (project));
// });

// projectArticles.forEach(project => {
// $('#projects').append(project.toHtml());
// });

// ----------------------------------------------------
//call functions
//----------------------------------------------------

// $(document).ready(function() {
//
// });
