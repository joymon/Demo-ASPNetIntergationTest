export class FeedService {
    static $inject = ["$http", "$q"];

    http: ng.IHttpService;
    q: ng.IQService;
    constructor($http: ng.IHttpService, $q: ng.IQService) {
        this.http = $http;
        this.q = $q;
    }
    private urlFormat = "https://{blog}.blogspot.com/feeds/posts/default?orderby=published&max-results=3&alt=json"
    GetPosts(feed: string) {
        var deferred = this.q.defer<any>();

        let actualUrl = this.urlFormat.replace('{blog}', feed)
        this.http.jsonp<any>(actualUrl)
            .then((s) => {
                var res: ng.IHttpPromiseCallbackArg<JoymonOnline.BlogFeedResponse> = s;
                var response: JoymonOnline.BlogFeedResponse = { feed: s.data.feed };
                response.feed.link = s.data.feed.link[2].href;
                response.feed.title = s.data.feed.title.$t;
                response.feed.entries = s.data.feed.entry.map((entry) => {
                    var postEntry: JoymonOnline.BlogPostEntry = {
                        title: entry.title.$t,
                        content: entry.content.$t,
                        link: entry.link[4].href,
                        publishedDate: entry.published.$t
                    };
                    return postEntry;
                });
                res.data = response;
                deferred.resolve(res);
            })
            .catch((err) => {
                deferred.reject(err);
            });
        return deferred.promise;
    }
}
require('./app').JoymonOnline.AppModule.getInstance().registerService("DataService", FeedService);
