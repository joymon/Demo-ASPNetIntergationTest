<%@ Page Title="Joymon Online | Changelog" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Changelog.aspx.cs" Inherits="JoymonOnline.Changelog" %>
<%@ OutputCache CacheProfile="Cache1Week" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Main" runat="server">

    <div class="shim column"></div>

    <div class="page" id="changeLog">
        <div id="content">
            <h3>Version <%= JoymonOnline.VersionProvider.Version.Value %></h3>
            <h3>Changelog</h3>
            <p>Here I write the history and evolution of my web site. It helps me look at my past and analyze how far I improved my site.</p>
            <h4>V5</h4>
            <dl>
                <dt>9MayOct2016</dt>
                <dd>Started using FontAwesome library for icons.</dd>
            </dl>
            <dl>
                <dt>5MayOct2016</dt>
                <dd>Made the site responsive without bootstrap.</dd>
            </dl>
            <dl>
                <dt>29Oct2015</dt>
                <dd>Moved source to Github and setup continuous integration and delivery. Used AppVeyor for CI and CD </dd>
            </dl>
            <h4>V4</h4>
            <dl>
                <dt>8Sep2015</dt>
                <dd>Added page for personal projects. Includes open source as well.</dd>

                <dt>11May2015</dt>
                <dd>Added stackoverflow and linked in profiles into Resume. </dd>

                <dt>22Mar2015</dt>
                <dd>Added error page and change log. Collected history from old mails for changelog. </dd>
                <dt>21Mar2015</dt>
                <dd>Moved source to visualstudio.com. Enabled web deploy to speed up updates.</dd>

                <dt>19Mar2015</dt>
                <dd>Moved entire site content from old hosting space to new. 2 days down time.</dd>

            </dl>
            <h4>V3</h4>
            <dl>
                <dt>17Mar2015</dt>
                <dd>Hosting space expired. </dd>
                <dt>15Mar2015</dt>
                <dd>Renewal of hosting space is very costly with godaddy.</dd>
                <dd>So bought new space from godaddy in introductory offer</dd>
                <dt>28Apr2014</dt>
                <dd>Renewed joymonline.in domain</dd>
                <dt>26Mar2013</dt>
                <dd>Renewed joymonline.in domain</dd>
                <dt>17March2012</dt>
                <dd>Bought domain (1 year) and hosting space(3 years) from godaddy.</dd>
                <dd>Started new domain www.joymononline.in</dd>
            </dl>
            <h4>V2</h4>
            <dl>
                <dt>30July2011</dt>
                <dd>After many mails with UniTecHost support they gave me joymononline.co.in domain.</dd>

            </dl>
            <h4>V1</h4>
            <dl>
                <dt>19July2011</dt>
                <dd>Domain joymononline.com expired.</dd>
                <dt>17Jun2011</dt>
                <dd>An e-mail came asking me to manually renew my domain else it will expire by 19Jun2011.</dd>
                <dt></dt>
                <dd>Earlier this type of action was not at all required.</dd>
                <dt></dt>
                <dd>Didn't give much attention as I had done already and due to intense work schedule.</dd>
                <dt>12Jun2011</dt>
                <dd>Renewed web site as usual</dd>
                <dt>13Jun2010</dt>
                <dd>Renewed web site. By this time hosting provider stopped shared hosting. but continued existing.</dd>
                <dt>25May2009</dt>
                <dd>Renewed web site</dd>
                <dt>18Nov2008</dt>
                <dd>NetWayWeb.Net was taken over / changed to Unitechost.in. </dd>
                <dt>25Jun2008</dt>
                <dd>Started my personal website http://joymononline.com. </dd>
                <dt></dt>
                <dd>Used Asp.Net 2.0 with free personal web site theme from Microsoft.</dd>
                <dt></dt>
                <dd>Hosted with an Indian company called NetWayWeb.net</dd>

            </dl>



        </div>
    </div>

</asp:Content>
