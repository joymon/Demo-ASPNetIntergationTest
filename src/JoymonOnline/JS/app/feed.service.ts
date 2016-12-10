module JoymonOnline {
    export class GithubDataService {
        static $inject = ["$http", "$q"];
        
        http: ng.IHttpService;
        q: ng.IQService;
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.http = $http;
            this.q = $q;
        }
        GetAllProjects(): Array<GithubProject> {
            return null;
        }
        GetWhatsNew() :string{
            return "Test data";
        }
        GetWhoAmI():string {
            return "Test data";
        }
    }
    //angular.module('CountryApp').service("CountryMetaDataService", ["$http", '$q', 'HttpService', CountryMetaDataService]);
    JoymonOnline.AppModule.getInstance().registerService("DataService", GithubDataService);
}