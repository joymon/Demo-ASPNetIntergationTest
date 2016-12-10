namespace JoymonOnline {
    export class BlogFeed {
        public Posts: Array<BlogPostEntry>;
    }
    export class BlogPostEntry {
        public Title:string ;
        public Url: string;
        public PublishDate: Date;
        public Content: string;
    }
}