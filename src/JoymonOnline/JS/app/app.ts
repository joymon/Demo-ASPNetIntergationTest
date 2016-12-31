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
            this.app = angular.module("JoymonOnline", ['ngSanitize']);
            AppModule.currentCountryModule = this;
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
    }
    var hrApp: AppModule = new AppModule();
    ////////////REgion helpers//////////////
    export class HTMLTagRemover {
        public static filter(): Function {
            
            return (text: string):string => { return text ? String(text).replace(/<[^>]+>/gm, '') : '' };
        } 
    }
    AppModule.getInstance().registerFilter("removeTags", HTMLTagRemover.filter);
    export class ToDateFilter {
        public static filter(): Function {
            return (text: string): Date => { return new Date(text.replace(/-/g, "/")); };
        }
    }
    AppModule.getInstance().registerFilter("toDate", ToDateFilter.filter);

}