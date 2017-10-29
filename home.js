function Project (projectInfo) {
  this.title = projectInfo.title;
  this.image= projectInfo.image;
  this.link= projectInfo.link;
  this.date = projectInfo.date;
  this.description = projectInfo.description;
  this.technologies = projectInfo.technologies;
  this.repo = projectInfo.repo;
};

Project.prototype.toHtml = function () {
  var $newProject = $('.project-template').clone();
  $newProject.removeClass("project-template");
  $newProject.find ('.title').text(this.title);
  $newProject.find('img').attr('src', this.image);
  $newProject.find('.link').text(this.link);
  $newProject.find('.date').text(this.date);
  $newProject.find('.description').text(this.description);
  $newProject.find('.technologies').text(this.technologies);
  $newProject.find('.repo').text(this.repo);
  return $newProject;
};

projects.forEach(function(project) {
  var newProject = new Project (project);
  $('#projects').append(newProject.toHtml());
});

// $(function() {
//   $('li').attr('id','home');
//
// });
