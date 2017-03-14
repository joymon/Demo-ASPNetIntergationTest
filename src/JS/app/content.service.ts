var appmodule = require('./app');
     class ContentService {
        static $inject = ["$http", "$q"];

        http: ng.IHttpService;
        q: ng.IQService;
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.http = $http;
            this.q = $q;
        }
        sourceToUrlMap = {
            WhatsNew: "http://joymononline.in/Data/Home/WhatsNew.html",
            WhoAmI: "http://joymononline.in/Data/Home/WhoAmI.html"
        };

        GetUrl(source: string): string {
            return this.sourceToUrlMap[source];
        }
        Get(feedURL: string): ng.IHttpPromise<any> {
            let lurl = this.GetUrl(feedURL);
            var deffered = this.q.defer<any>();
            this.http.get<any>(lurl,{cache:true})
                .then((s) => {
                    deffered.resolve({ data: s.data });
                })
                .catch((err) => {
                    console.log(err); 
                    deffered.reject(err); 
                });
            return deffered.promise;
        }
        GetWhatsNew(): string {
            return "Test data";
        }
        GetWhoAmI(): string {
            return "Test data wh";
        }
    }
    appmodule.JoymonOnline.AppModule.getInstance().registerService("ContentService", ContentService);
    export = ContentService;
