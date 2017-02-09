//component for individual content
var appmodule = require('./app');
import ContentService = require('./content.service');
 export module JoymonOnline{
   
 export class ContentController implements ng.IController {
        static $inject = ['ContentService'];
        contentService:ContentService;        
        constructor(contentService:  ContentService) {
            this.content = "Dummy content";
            this.contentService = contentService;
    }
        $onInit?(): void{
            this.contentService.Get(this.source)
                .then((value: ng.IHttpPromiseCallbackArg<any>) => {
                    console.log(value.data.feed);
                    this.content = value.data;
                })
                .catch((err) => { 
                    this.content = "Error";
                    console.log("Error" + err); 
                });
        }

        public content: string;
        public source: string;
    }
    export class ContentDirective implements ng.IComponentOptions {
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        public bindToController: boolean | { [boundProperty: string]: string };
        public bindings: { [boundProperty: string]: string };
        constructor() {
            this.templateUrl = 'JS/app/content.component.html';
            this.controller = ContentController;
            this.bindings = {
                source: '@',
            };
        }
    }
    appmodule.JoymonOnline.AppModule.getInstance().registerComponent("content", new ContentDirective());    
}