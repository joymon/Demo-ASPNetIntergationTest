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
            this.app = angular.module("JoymonOnline", []);
            AppModule.currentCountryModule = this;
        }
        registerService(name: string, serviceConstructor: Function): void {
            this.app.service(name, serviceConstructor);
        }
        registerController(name: string, controllerConstructor: ng.IController): void {
            this.app.controller(name, () => controllerConstructor);
        }
    }
    var hrApp: AppModule = new AppModule();
}