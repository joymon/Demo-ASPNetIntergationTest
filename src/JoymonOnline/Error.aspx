<%@ Page Title="Joymon Online | Error" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Error.aspx.cs" Inherits="JoymonOnline.Error" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Main" runat="server">
    <div class="shim column"></div>
    
    <div class="page" id="links">
        <div id="content">
            <h3>An error occurred</h3>
    I am really sorry. There is an error occurred while serving the page. It may be due to
    <ul>
        <li>The page you are looking for is not a valid page in my site</li>
        <li>My hosting server may got unexpected error. May be due to load in my shared hosting environment</li>
        <li>May be an error in my .Net code :(</li>
        </ul>
            </div>
        </div>
    <input type="hidden" value="<%=ExceptionDetails %>" />
</asp:Content>
