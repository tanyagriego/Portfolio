  'use strict'

  (function(module) {
    const projectController = {};
    projectController.index = function() {
      projectView.initPage();
      $('.tab-content').hide();
      $('#home').show();
    }

    projectController.projects = function() {
      $('.tab-content').hide();
      $('#projects').show();
    }

    projectController.about = function() {
      $('.tab-content').hide();
      $('#about').show();
    }

    projectController.contact = function() {
      $('.tab-content').hide();
      $('#contact').show();
    }

    module.projectController = projectController;
  }) (window);
