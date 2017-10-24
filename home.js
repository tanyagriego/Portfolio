var Project = function (projectInfo) {
  this.title = projectInfo.title;
  this.date = projectInfo.date;
  this.image= projectInfo.image;
  this.link= projectInfo.link;
  this.description = projectInfo.description;
  this.technologies = projectInfo.technologies;
  this.repo = projectInfo.repo;
};

function myFunction(x) {
    x.classList.toggle("change");
}
