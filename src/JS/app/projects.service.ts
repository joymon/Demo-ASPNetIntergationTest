class ProjectsService {
  static $inject = ["$http", "$q"];
  private repoUrl = "https://api.github.com/repos/";
  private prjs = [
    "dotnet-helpers",
    "joyful-visualstudio",
    "Orchestration",
    "Karel",
    "PrayerBook"
  ];
  http: ng.IHttpService;
  q: ng.IQService;
  constructor($http: ng.IHttpService, $q: ng.IQService) {
    this.http = $http;
    this.q = $q;
  }
  private getProjectUrl(userName: string, projectName: string) {
    return this.repoUrl + userName + "/" + projectName;
  }
  private logAPIQuota(ret: ng.IHttpPromiseCallbackArg<{}>[]) {
    if (ret.length > 0) {
      console.log(ret[0].headers());
    }
  }
  GetAllProjects(
    userName: string
  ): ng.IHttpPromise<JoymonOnline.ProjectResponse[]> {
    var deffered = this.q.defer<any>();

    this.q
      .all(
        this.prjs.map((value: string, index: number, array: string[]) => {
          return this.http.get(this.getProjectUrl(userName, value), {
            cache: true
          });
        })
      )
      .then(
        s => {
          this.logAPIQuota(s);
          deffered.resolve({ data: s });
        },
        err => {
          deffered.reject(err);
        }
      );
    return deffered.promise;
  }
}
require("./app")
  .JoymonOnline.AppModule.getInstance()
  .registerService("ProjectsService", ProjectsService);
export = ProjectsService;
