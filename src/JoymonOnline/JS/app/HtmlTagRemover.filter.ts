module JoymonOnline {
    "use strict";
    export class HTMLTagRemover {
        public static filter(): Function {

            return (text: string): string => { return text ? String(text).replace(/<[^>]+>/gm, '') : '' };
        }
    }
    AppModule.getInstance().registerFilter("removeTags", HTMLTagRemover.filter);
    export class ToDateFilter {
        public static filter(): Function {
            return (text: string): Date => { return new Date(text.replace(/-/g, "/")); };
        }
    }
    AppModule.getInstance().registerFilter("toDate", ToDateFilter.filter);

}