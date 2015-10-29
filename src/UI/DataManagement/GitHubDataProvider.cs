using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace Joymononline
{
    public class GitHubDataProvider : IWhatsNewDataProvider
    {
        string IWhatsNewDataProvider.GetData()
        {
        string url="http://joymon.github.io/Data/Home/whatsnew.json";
            WebClient client = new WebClient();
            string result=client.DownloadString(url);
            return result;
        }
    }
}