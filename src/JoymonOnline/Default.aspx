<%@ Import Namespace="JoymonOnline" %>

<%@ Page Language="C#" MasterPageFile="~/site.master" Title="Joymon Online | Home" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="JoymonOnline.Default" %>

<%@ OutputCache CacheProfile="Cache30Seconds" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Main" runat="server">
    <script src="Scripts/angular.js" type="text/javascript"></script>
    <script src="Scripts/angular-sanitize.js" type="text/javascript"></script>

    <script src="JS/app/app.js" type="text/javascript"></script>
    <script src="JS/app/content.component.js" type="text/javascript"></script>
    <script src="JS/app/content.service.js" type="text/javascript"></script>
    <script src="JS/app/home.component.js" type="text/javascript"></script>
    
    <div id="ngWrapper" ng-app="JoymonOnline">
        <home></home>
    </div>

</asp:Content>
