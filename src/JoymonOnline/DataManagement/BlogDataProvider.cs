using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.ServiceModel.Syndication;
using System.Web;
using System.Xml;

namespace JoymonOnline
{
    public class BlogDataProvider
    {
        public IEnumerable<SyndicationItem> GetPosts(string FeedUrl, int count)
        {
            Collection<SyndicationItem> result = null;
            if (FeedUrl != string.Empty)
            {
                using (XmlReader reader = XmlReader.Create(FeedUrl))
                {
                    Rss20FeedFormatter feedFormatter = new Rss20FeedFormatter();
                    feedFormatter.ReadFrom(reader);
                    feedFormatter.PreserveElementExtensions = false;
                    result = feedFormatter.Feed.Items as Collection<SyndicationItem>;
                    if (result.Count <= 4)
                    {
                        return result;
                    }
                    while (result.Count != 4)
                    {
                        result.RemoveAt(result.Count - 1);
                    }
                }
            }
            return result;
        }



    }
}