/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
//Directive for individual content
var JoymonOnline;
(function (JoymonOnline) {
    var ContentDirective = (function () {
        function ContentDirective() {
            this.restrict = 'E';
            this.templateUrl = 'JS/app/content.component.html';
            this.controller = "ContentController";
            this.controllerAs = "ctrl";
            this.bindToController = true;
            this.scope = {
                source: '@'
            };
        }
        return ContentDirective;
    }());
    JoymonOnline.ContentDirective = ContentDirective;
    JoymonOnline.AppModule.getInstance().registerDirective("content", function () {
        console.log("Called reg fn");
        return new ContentDirective();
    });
    var ContentController = (function () {
        //static $inject = ['DataService'];
        function ContentController($scope, contentServie) {
            var _this = this;
            this.Url = "joymons world wpf";
            this.Feed = { entries: [] };
            //this.Feed.entries.push({ Title: "Test Title", publishDate: new Date(), content: "test content", link: 'test ur' });
            //this.Feed.entries.push({ Title: "Test Title2", publishDate: new Date(), content: "test content2", link: 'test url2' });
            //console.log("rss" + $scope.ctrl.rss);
            contentServie.Get($scope.ctrl.source)
                .then(function (value) {
                console.log(value.data.feed);
                _this.content = value.data;
            })
                .catch(function (err) { console.log("Error" + err); });
            this.content = $scope.ctrl.source;
        }
        ContentController.prototype.getUrl = function () {
            return this.Url;
        };
        return ContentController;
    }());
    JoymonOnline.ContentController = ContentController;
    JoymonOnline.AppModule.getInstance().registerControllerWithFactory("ContentController", function ($scope, ContentService) { return new ContentController($scope, ContentService); });
})(JoymonOnline || (JoymonOnline = {}));
//# sourceMappingURL=content.component.js.map