
    export class HomeRoute implements ng.route.IRoute {
        template = "<home></home>";
        caseInsensitiveMatch = true;
    }
    export class ResumeRoute implements ng.route.IRoute {
        template = "<resume></resume>";
        caseInsensitiveMatch = true;
    }
    export class ViewResumeRoute implements ng.route.IRoute {
        template = "<view-resume></view-resume>";
        caseInsensitiveMatch = false;
    }
    export class BlogsRoute implements ng.route.IRoute {
        template = "<blogs-view></blogs-view>";
        caseInsensitiveMatch = true;
    }
    export class LinksRoute implements ng.route.IRoute {
        template = "<links></links>";
        caseInsensitiveMatch = true;
    }
    export class ProjectsRoute implements ng.route.IRoute {
        template = "<projects></projects>";
        caseInsensitiveMatch = true;
    }
    export class ChangelogRoute implements ng.route.IRoute {
        template = "<changelog></changelog>";
        caseInsensitiveMatch = true;
    }
