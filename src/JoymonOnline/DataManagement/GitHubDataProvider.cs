using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Script.Serialization;
using JoymonOnline;

namespace Joymononline
{
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

        private void AddAuthorrizationToken(WebClient client)
        {
            if (string.IsNullOrWhiteSpace(GitHubConfiguration.GitHubAPIToken.Value))
            {
                Console.WriteLine("GitHubAPI.Value is not available. Proceeding without authentication");
            }
            else
            {
                client.Headers.Add("Authorization", "token " + GitHubConfiguration.GitHubAPIToken.Value);
            }
        }

        IEnumerable<Project> IProjectDataProvider.GetProjects()
        {
            return GetProjectNames()
                .Select((projectName) => GetGitHubAPIUrlFromProjectName(projectName))
                 .Select((url) => GetJSONFromGitHubAPI(url))
                 .Select((json) => GetProjectFromJSON(json));
        }

        private string GetJSONFromGitHubAPI(string url)
        {
            WebClient client = new WebClient();
            AddAuthorrizationToken(client);
            client.Headers.Add("User-Agent", "API");
            string result = client.DownloadString(url);
            return result;
        }

        private Project GetProjectFromJSON(string json)
        {
            JavaScriptSerializer ser = new JavaScriptSerializer();
            dynamic projectNode = ser.Deserialize<dynamic>(json);
            return new Project()
            {
                Name = projectNode["name"],
                Description = projectNode["description"],
                SourceUrl = projectNode["html_url"],
                Url = projectNode["homepage"]
            };
        }
        private string GetGitHubAPIUrlFromProjectName(string projecName)
        {
            return string.Format("https://api.github.com/repos/joymon/{0}", projecName);
        }
        private IEnumerable<string> GetProjectNames()
        {
            return new List<string>() {
                "joyful-visualstudio",
                "Orchestration",
                "Karel",
            };
        }
    }
}