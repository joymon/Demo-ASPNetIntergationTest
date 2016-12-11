module JoymonOnline {
    export class BlogDataService {
        static $inject = ["$http", "$q"];

        http: ng.IHttpService;
        q: ng.IQService;
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.http = $http;
            this.q = $q;
        }
        GetPosts(feedURL: string): ng.IHttpPromise<any> {
            let lurl = '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=3&callback=JSON_CALLBACK&q=' + encodeURIComponent(feedURL);
            var deffered = this.q.defer<any>();
            this.http.jsonp<any>(lurl)
                .error((err) => { deffered.reject(err); })
                .then((s) => {
                    deffered.resolve({ data: s.data.responseData });
                });
            return deffered.promise;
        }
        GetWhatsNew(): string {
            return "Test data";
        }
        GetWhoAmI(): string {
            return "Test data";
        }
    }
    //angular.module('CountryApp').service("CountryMetaDataService", ["$http", '$q', 'HttpService', CountryMetaDataService]);
    JoymonOnline.AppModule.getInstance().registerService("DataService", BlogDataService);
    export class ProjectsDataService {
        GetAllProjects(): Array<GithubProject> {
            return null;
        }

    }
}