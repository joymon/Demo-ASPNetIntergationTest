using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace Joymononline
{
    public class GitHubDataProvider : IWhatsNewDataProvider,IWhoAmIDataProvider
    {
        string IWhoAmIDataProvider.GetData()
        {
            string url = "http://joymon.github.io/Data/Home/WhoAmI.html";
            WebClient client = new WebClient();
            string result = client.DownloadString(url);
            return result;
        }

        string IWhatsNewDataProvider.GetData()
        {
        string url="http://joymon.github.io/Data/Home/whatsnew.json";
            WebClient client = new WebClient();
            string result=client.DownloadString(url);
            return result;
        }
    }
}