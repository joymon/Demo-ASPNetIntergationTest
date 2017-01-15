//Directive for individual Blog Feed
import ProjectsService = require('./projects.service');
     class ProjectsDirective implements ng.IDirective {
        public restrict: string;
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        public bindToController: boolean | { [boundProperty: string]: string };
        public scope: boolean | { [boundProperty: string]: string };
        constructor() {
            this.restrict = 'E';
            this.templateUrl = 'JS/app/projects.component.html';
            this.controller = ProjectsController;
            this.controllerAs = "ctrl";
            this.bindToController = true;
            this.scope = {
                rss: '@'
            };
        }
    }
    require('./app').JoymonOnline.AppModule.getInstance().registerDirective("projects", () => {
        console.log("Called reg fn");
        return new ProjectsDirective()
    });
     class ProjectsController implements ng.IController {

        static $inject = ['ProjectsService'];
        constructor(dataServie: ProjectsService) {
            console.log("ProjectsController created");
            this.Url = "joymons world wpf";
            this.Projects = [] ;
            //this.Feed.entries.push({ Title: "Test Title", publishDate: new Date(), content: "test content", link: 'test ur' });
            //this.Feed.entries.push({ Title: "Test Title2", publishDate: new Date(), content: "test content2", link: 'test url2' });
            //console.log("rss" + $scope.ctrl.rss);
            dataServie.GetAllProjects('joymon')
                .then((value: ng.IHttpPromiseCallbackArg<JoymonOnline.ProjectResponse[]>) => {
                    console.log(value.data);
                    this.Projects = value.data;
                })
                .catch((err) => { console.log("Error" + err); });
        }
        public rss: string;
        public Projects: JoymonOnline.ProjectResponse[];
        public Url: string;
        getUrl(): string {
            return this.Url;
        }
    }
    //require('./app').JoymonOnline.AppModule.getInstance().registerControllerWithFactory("ProjectsController", ($scope:any, ProjectsService: ProjectsService)=> new ProjectsController($scope,ProjectsService));