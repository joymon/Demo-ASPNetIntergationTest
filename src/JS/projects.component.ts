//Directive for individual Blog Feed
import ProjectsService = require('./app/projects.service');
  class ProjectsController implements ng.IController {

        static $inject = ['ProjectsService'];
        projectService:ProjectsService;
        constructor(dataServie: ProjectsService) {
            this.projectService = dataServie
            this.Url = "joymons world wpf";
            this.Projects = [] ;
        }
        public rss: string;
        public Projects: JoymonOnline.ProjectResponse[];
        public Url: string;
        getUrl(): string {
            return this.Url;
        }
        $onInit?():void
        {
            this.projectService.GetAllProjects('joymon')
                .then((value: ng.IHttpPromiseCallbackArg<JoymonOnline.ProjectResponse[]>) => {
                    console.log(value.data);
                    this.Projects = value.data;
                })
                .catch((err) => { console.log("Error" + err); });
        }
    }
     class ProjectsComponent implements ng.IComponentOptions {
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        public bindToController: boolean | { [boundProperty: string]: string };
         public bindings: { [boundProperty: string]: string };
        constructor() {
            this.templateUrl = 'JS/projects.component.html';
            this.controller = ProjectsController;
            this.controllerAs = "ctrl";
            this.bindToController = true;
            this.bindings = {
                rss: '@'
            };
        }
    }
    require('./app/app').JoymonOnline.AppModule.getInstance().registerComponent("projects",new ProjectsComponent());
     