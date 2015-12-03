using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Script.Serialization;
using JoymonOnline;

namespace JoymonOnline
{
    /// <summary>
    /// Entry point for all GitHub related data providers.
    /// </summary>
    /// <remarks>Move the actual data fetching logic to outside.</remarks>
    internal class GitHubDataProvider : IWhatsNewDataProvider, IWhoAmIDataProvider, IProjectDataProvider
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
            string url = "http://joymon.github.io/Data/Home/whatsnew.json";
            WebClient client = new WebClient();
            
            string result = client.DownloadString(url);
            return result;
        }
        IEnumerable<Project> IProjectDataProvider.GetProjects()
        {
            return new GitHubAPIClient().GetProjects();
        }
    }
}