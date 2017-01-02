/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
module JoymonOnline {
    "use strict";
    export class AppModule {
        //Do not expose the property as it is not expected to change from outside.
        private static currentCountryModule: AppModule;
        public static getInstance(): AppModule {
            return AppModule.currentCountryModule;
        }
        private app: ng.IModule;
        constructor() {
            this.app = angular.module("JoymonOnline", ['ngSanitize','ngRoute']);
            AppModule.currentCountryModule = this;
            this.registerRoutes();
        }
        registerService(name: string, serviceConstructor: Function): void {
            console.log("Registered service " + name);
            this.app.service(name, serviceConstructor);
        }
        registerController(name: string, controllerConstructor: ng.IController): void {
            this.app.controller(name, () => controllerConstructor);
            var f: Function;
        }
        registerControllerWithFactory(name: string, factory: (...args: any[])=>ng.IController) {
            this.app.controller(name,factory);
        }
        registerDirective(name: string,directiveFactory:ng.IDirectiveFactory): void {
            console.log("reg dir " + name);
            this.app.directive(name, directiveFactory);
        }
        registerFilter(name: string,fun:Function) {
            this.app.filter(name, fun);
        }
        registerComponent(name: string, options: ng.IComponentOptions) {
            this.app.component(name, options);
        }
        registerRoutes(): void {
            this.app.config(["$routeProvider",
                function ($routeProvider: ng.route.IRouteProvider) {
                    $routeProvider.when("/home", new HomeRoute())
                        .when("/Resume", new ResumeRoute())
                        .when("/ViewResume",new ViewResumeRoute())
                        .when("/Blogs", new BlogsRoute())
                        .when("/Links", new LinksRoute())
                        .when("/Projects", new ProjectsRoute())
                        .when("/Changelog", new ChangelogRoute())
                        .otherwise(new HomeRoute());
                }]);
        }
    }
    var hrApp: AppModule = new AppModule();
}