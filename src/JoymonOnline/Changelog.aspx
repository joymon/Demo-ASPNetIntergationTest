<%@ Page Title="Joymon Online | Changelog" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Changelog.aspx.cs" Inherits="JoymonOnline.Changelog" %>

<%@ OutputCache CacheProfile="Cache1Week" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Main" runat="server">
    <script src="Scripts/angular.js" type="text/javascript"></script>
    <script src="Scripts/angular-sanitize.js" type="text/javascript"></script>

    <script src="JS/app/app.js" type="text/javascript"></script>
    <script src="JS/app/changelog.component.js" type="text/javascript"></script>
    
    <div id="ngWrapper" ng-app="JoymonOnline">
        <changelog></changelog>
    </div>
</asp:Content>
