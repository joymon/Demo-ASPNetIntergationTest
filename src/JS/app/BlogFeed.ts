module JoymonOnline {
    export class BlogFeedResponse {
        public feed: BlogFeed;

    }
    export class BlogFeed {
        public link: string;
        public title:string ;
        public entries: Array<BlogPostEntry>;
    }
    export class BlogPostEntry {
        constructor(title:string,link:string,publishedDate:Date,content:string){  
            this.title =title;
            this.content = content;
            this.publishedDate = publishedDate;
            this.link = link;
        }
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