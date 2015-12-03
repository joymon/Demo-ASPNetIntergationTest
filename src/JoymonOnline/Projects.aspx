<%@ Page Title="Joymon Online | Projects" Language="C#" EnableViewState="false"
    MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Projects.aspx.cs" Inherits="JoymonOnline.Projects" %>

<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="Main">
    <div class="shim column"></div>

    <div class="page" id="resume">
        <div id="content">
            <h3>Applications</h3>
            <p>
                Below are my personal projects which are available to public use.
            </p>
            <asp:Repeater ID="ProjectsRepeater" runat="server" DataSourceID="ProjectsObjectDataSource">
                <ItemTemplate>
                    <h4><%# Eval("Name") %></h4>
                    <p class="first">
                        <%# Eval("Description") %>
                        <br />
                        Application url
                <a href="<%# Eval("Url") %>"><%# Eval("Url") %></a>
                        <br />
                        <asp:Label runat="server" 
                            Visible="<%# GetVisibilityFromSourceUrl(Container.DataItem) %>">Source code</asp:Label> <a href="<%# Eval("SourceUrl") %>"><%# Eval("SourceUrl") %></a>
                    </p>
                </ItemTemplate>
            </asp:Repeater>
        </div>
    </div>

    <asp:ObjectDataSource ID="ProjectsObjectDataSource" runat="server" SelectMethod="GetProjects" TypeName="JoymonOnline.ProjectsDataProvider"></asp:ObjectDataSource>
</asp:Content>
