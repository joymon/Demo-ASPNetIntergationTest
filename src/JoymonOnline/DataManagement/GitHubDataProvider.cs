using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Script.Serialization;

namespace Joymononline
{
    internal class GitHubDataProvider : IWhatsNewDataProvider,IWhoAmIDataProvider, IProjectDataProvider
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

        IEnumerable<Project> IProjectDataProvider.GetProjects()
        {
           return GetProjectUrls()
                .Select((url) => GetProjectFromGitHubUrl(url));
        }

        private Project GetProjectFromGitHubUrl(string url)
        {
            
            return GetProjectFromJSON(GetJSONFromGitHubAPI(url));
        }

        private string GetJSONFromGitHubAPI(string url)
        {
            WebClient client = new WebClient();
            client.Headers.Add("User-Agent", "API");
            string result = client.DownloadString(url);
            return result;
        }

        private Project GetProjectFromJSON(string v)
        {
            JavaScriptSerializer ser = new JavaScriptSerializer();
            dynamic projectNode=ser.Deserialize<dynamic>(v);
            return new Project() { Name=projectNode["name"]};
        }

        private IEnumerable<string> GetProjectUrls()
        {
            return new List<string>() {
                "https://api.github.com/repos/joymon/joyful-visualstudio"
            };
        }
    }
}