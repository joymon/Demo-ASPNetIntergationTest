using System;
using System.Collections.Generic;
using System.ServiceModel.Syndication;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JoymonOnline.Tests
{
    [TestClass]
    public class BlogDataProvider_GetPosts
    {
        [TestMethod]
        [ExpectedException (typeof(ArgumentNullException))]
        public void WhenUrlIsEmpty_ThrowException()
        {
            BlogDataProvider provider = new BlogDataProvider();
            IEnumerable<SyndicationItem> items = provider.GetPosts(null, 10);
        }
    }
}
