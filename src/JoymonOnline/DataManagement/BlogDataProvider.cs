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
            using (XmlReader reader = XmlReader.Create(FeedUrl))
            {
                Rss20FeedFormatter feedFormatter = new Rss20FeedFormatter();
                feedFormatter.ReadFrom(reader);
                feedFormatter.PreserveElementExtensions = false;
                return feedFormatter.Feed.Items.Take(4);
            }
        }
    }
}