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
            return DataProviderFactory.ProjectsDataProvider.Value.GetProjects();
        }
    }
}