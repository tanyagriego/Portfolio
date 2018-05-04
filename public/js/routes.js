'use strict';

page('/', projectController.showMenuContent('home'));
page('/projects', projectController.showMenuContent('projects'));
page('/about', projectController.showMenuContent('about'));
page('/contact', projectController.showMenuContent('contact'));

page();
