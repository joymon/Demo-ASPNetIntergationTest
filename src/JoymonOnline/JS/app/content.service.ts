module JoymonOnline {
    export class ContentService {
        static $inject = ["$http", "$q"];

        http: ng.IHttpService;
        q: ng.IQService;
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.http = $http;
            this.q = $q;
        }
        sourceToUrlMap = {
            WhatsNew: "http://joymon.github.io/Data/Home/WhatsNew.html",
            WhoAmI: "http://joymon.github.io/Data/Home/WhoAmI.html"
        };

        GetUrl(source: string): string {
            return this.sourceToUrlMap[source];
        }
        Get(feedURL: string): ng.IHttpPromise<any> {
            let lurl = this.GetUrl(feedURL);
            var deffered = this.q.defer<any>();
            this.http.get<any>(lurl)
                .error((err) => { deffered.reject(err); })
                .then((s) => {
                    deffered.resolve({ data: s.data });
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
    JoymonOnline.AppModule.getInstance().registerService("ContentService", ContentService);
    
}