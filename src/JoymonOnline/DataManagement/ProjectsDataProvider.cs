using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Joymononline;
namespace JoymonOnline
{
    public class ProjectsDataProvider
    {
        public IEnumerable<Project> GetProjects()
        {
            return DataProviderFactory.ProjectsDataProvider.Value.GetProjects().Union(new List<Project>(){
                new Project()
                {
                    Name="Prayer Book",
                    Description ="This is an online prayer book currently having prayers in Malayalam only. This is developed for my own personal use. But anybody can use it.",
                    Url="http://joymononline.in/apps/prayerbook/index.html"
                }
            });
        }
    }
}