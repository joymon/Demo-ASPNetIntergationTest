var ngModule = require("./app");
//new ngModule.AppModule();
// Registration of angular components go here
require('./content.service');
require ('./feed.service');
require('./projects.service');
require('./HtmlTagRemover.filter')
require('./content.component');
require('./menu.component');
require('./home.component');
require('./resume.component');
require('./feed.component');
require('./blogsView.component');
require('./links.component');
require('./projects.component');
require('./changelog.component');
require("./viewResume.component");