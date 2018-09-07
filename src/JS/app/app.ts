var angular = require('angular');
require('angular-sanitize');
require('angular-route');
import routes = require('./routes');
export module JoymonOnline {
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
        }
        registerControllerWithFactory(name: string, factory: (...args: any[])=>ng.IController) {
            this.app.controller(name,factory);
        }
        registerDirective(name: string,directiveFactory:ng.IDirectiveFactory): void {
            console.log("Registered directive " + name);
            this.app.directive(name, directiveFactory);
        }
        registerFilter(name: string,fun:ng.IFilterFunction) {
            this.app.filter(name,(func) => fun);
        }
        registerComponent(name: string, options: ng.IComponentOptions) {
            this.app.component(name, options);
            console.log("Registered component " + name);
             
        }
        registerRoutes(): void {
            this.app.config(["$routeProvider","$locationProvider",
                function ($routeProvider: ng.route.IRouteProvider,$locationProvider :ng.ILocationProvider) {
                    $locationProvider.hashPrefix('');
                    $routeProvider.when("/home", new routes.HomeRoute())
                        .when("/Resume", new routes.ResumeRoute())
                        .when("/ViewResume",new routes.ViewResumeRoute())
                        .when("/Blogs", new routes.BlogsRoute())
                        .when("/Links", new routes.LinksRoute())
                        .when("/Projects", new routes.ProjectsRoute())
                        .when("/Changelog", new routes.ChangelogRoute())
                        .otherwise(new routes.HomeRoute());
                }]);
                this.app.config(['$sceDelegateProvider', function($sceDelegateProvider :ng.ISCEDelegateProvider) {
                    $sceDelegateProvider.resourceUrlWhitelist([
                        // Allow same origin resource loads.
                        'self',
                        // Allow JSONP calls that match this pattern
                        'https://*.blogspot.**']);
                }]);
        }
    }
    new AppModule();
}
