'use strict';

(function(module) {
  const projectController = {};
  projectController.showMenuContent = function(menuChoice) {
    return () => {
      $('.tab-content').hide();
      $(`#${menuChoice}`).show(); // $('#about').show()
      $('.modal-overlay').hide();
    }
  }

  module.projectController = projectController;
}) (window);
