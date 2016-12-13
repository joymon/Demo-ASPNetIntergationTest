namespace JoymonOnline {
    export class BlogFeedResponse {
        public feed: BlogFeed;
    }
    export class BlogFeed {
        public entries: Array<BlogPostEntry>;
    }
    export class BlogPostEntry {
        public title:string ;
        public link: string;
        public publishedDate: Date;
        public content: string;
    }
    export class ProjectResponse {
        public data: Project;
    }
    export class Project {
        public name: string;
        public description: string;
        public html_url: string;
        public homepage: string;
    }
}