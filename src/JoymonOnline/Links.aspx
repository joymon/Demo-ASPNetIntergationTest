<%@ Page Language="C#" MasterPageFile="~/site.master" Title="Joymon Online | Links"
    CodeBehind="Links.aspx.cs" Inherits="JoymonOnline.Links" %>
<%@ OutputCache CacheProfile="Cache1Week" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Main" runat="server">

    <script src="Scripts/angular.js" type="text/javascript"></script>
    <script src="Scripts/angular-sanitize.js" type="text/javascript"></script>

    <script src="JS/app/app.js" type="text/javascript"></script>
    <script src="JS/app/links.component.js" type="text/javascript"></script>
    
    <div id="ngWrapper" ng-app="JoymonOnline">
    <links></links>
            </div>

</asp:Content>
