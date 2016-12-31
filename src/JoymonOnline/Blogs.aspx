<%@ Page Language="C#" MasterPageFile="~/site.master" AutoEventWireup="true" CodeBehind="Blogs.aspx.cs"
    Inherits="JoymonOnline.Blogs" Title="Joymon Online | Blogs" %>

<%@ OutputCache CacheProfile="Cache1Day" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Main" runat="Server">
    <script src="Scripts/angular.js" type="text/javascript"></script>
    <script src="Scripts/angular-sanitize.js" type="text/javascript"></script>

    <script src="JS/app/app.js" type="text/javascript"></script>
    <script src="JS/app/feed.component.js" type="text/javascript"></script>
    <script src="JS/app/feed.service.js" type="text/javascript"></script>

    <script src="JS/app/blogsView.component.js" type="text/javascript"></script>
    <div id="ngWrapper" ng-app="JoymonOnline">
        <blogs-view></blogs-view>
    </div>
</asp:Content>

