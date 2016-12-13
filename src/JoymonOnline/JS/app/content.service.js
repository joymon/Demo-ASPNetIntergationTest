var JoymonOnline;
(function (JoymonOnline) {
    var ContentService = (function () {
        function ContentService($http, $q) {
            this.sourceToUrlMap = {
                WhatsNew: "http://joymon.github.io/Data/Home/WhatsNew.html",
                WhoAmI: "http://joymon.github.io/Data/Home/WhoAmI.html"
            };
            this.http = $http;
            this.q = $q;
        }
        ContentService.prototype.GetUrl = function (source) {
            return this.sourceToUrlMap[source];
        };
        ContentService.prototype.Get = function (feedURL) {
            var lurl = this.GetUrl(feedURL);
            var deffered = this.q.defer();
            this.http.get(lurl)
                .error(function (err) { deffered.reject(err); })
                .then(function (s) {
                deffered.resolve({ data: s.data });
            });
            return deffered.promise;
        };
        ContentService.prototype.GetWhatsNew = function () {
            return "Test data";
        };
        ContentService.prototype.GetWhoAmI = function () {
            return "Test data";
        };
        ContentService.$inject = ["$http", "$q"];
        return ContentService;
    }());
    JoymonOnline.ContentService = ContentService;
    //angular.module('CountryApp').service("CountryMetaDataService", ["$http", '$q', 'HttpService', CountryMetaDataService]);
    JoymonOnline.AppModule.getInstance().registerService("ContentService", ContentService);
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=content.service.js.map