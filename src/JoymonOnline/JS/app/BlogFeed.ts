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
}