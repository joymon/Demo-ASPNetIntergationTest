<%@ Page Language="C#" MasterPageFile="~/site.master" AutoEventWireup="true" CodeBehind="Blogs.aspx.cs"
    Inherits="JoymonOnline.Blogs" Title="Joymon Online | Blogs" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Main" runat="Server">
    <div class="shim column"></div>

    <div class="page" id="links">
        <div id="content">
            <h3>About the Links</h3>
            <p>This is my blogosphere.Here you can find few of my blogs with their latest posts.You may read all by clicking on the coresponding URL.</p>
            <div>
                <h4><a href="http://joymonscode.blogspot.com/" target="_blank">Joymon v/s Code</a></h4>
                <div class="blogItems">
                    <asp:GridView ID="GridView1" runat="server" DataSourceID="JoymonsCodeObjectDataSource" SkinID="blogGrid">
                        <Columns>
                            <asp:TemplateField ItemStyle-BorderColor="Transparent" ControlStyle-BorderColor="Transparent">
                                <ItemTemplate>
                                    <div class="blogItem">
                                        <span style="float: left">
                                            <asp:HyperLink ID="HyperLink1" runat="server" Target="_blank" NavigateUrl='<%#Eval("Links[0].Uri") %>'>

                                                <asp:Label ID="Label2" runat="server" Text='<%# Bind("Title.Text") %>'></asp:Label>
                                            </asp:HyperLink>
                                        </span>
                                        <span style="float: right">
                                            <asp:Label ID="Label1" runat="server" Text='<%#String.Format("{0:dd MMM yyyy}", Eval("PublishDate")) %>'></asp:Label>
                                        </span>
                                        <br />
                                        <asp:Label ID="Label3" runat="server" Text='<%# TrimSubject(DataBinder.Eval(Container.DataItem, "Summary.Text").ToString())  %>'></asp:Label>
                                    </div>
                                </ItemTemplate>
                                <ControlStyle BorderColor="Transparent" />
                                <ItemStyle BorderColor="Transparent" />
                            </asp:TemplateField>
                        </Columns>
                    </asp:GridView>
                </div>
            </div>
            <br />
            <div>
                <h4><a href="http://joyfulwpf.blogspot.com" target="_blank">JoyfulWPF</a></h4>
                <div class="blogItems">
                    <asp:GridView ID="gvJoyFulWPF" runat="server" DataSourceID="JoyfulWPFObjectDataSource" AutoGenerateColumns="False" ShowHeader="False"
                        BorderWidth="0px" BackColor="Transparent" GridLines="None" AlternatingRowStyle-BorderWidth="0px" AlternatingRowStyle-BackColor="Transparent">
                        <Columns>
                            <asp:TemplateField ItemStyle-BorderColor="Transparent" ControlStyle-BorderColor="Transparent">
                                <ItemTemplate>
                                    <div class="blogItem">
                                        <span style="float: left">
                                            <asp:HyperLink runat="server" Target="_blank" NavigateUrl='<%#Eval("Links[0].Uri") %>'>
                                                <asp:Label ID="Label2" runat="server" Text='<%# Bind("Title.Text") %>' />
                                            </asp:HyperLink>
                                        </span>
                                        <span style="float: right">
                                            <asp:Label ID="Label1" runat="server" Text='<%#String.Format("{0:dd MMM yyyy}", Eval("PublishDate")) %>' />
                                        </span>
                                        <br />
                                        <asp:Label ID="Label3" runat="server" Text='<%# TrimSubject(DataBinder.Eval(Container.DataItem, "Summary.Text").ToString())  %>' />
                                    </div>
                                </ItemTemplate>
                                <ControlStyle BorderColor="Transparent" />
                                <ItemStyle BorderColor="Transparent" />
                            </asp:TemplateField>
                        </Columns>
                    </asp:GridView>
                </div>
            </div>

            <br />
            <div>
                <h4><a href="http://silverlightedweb.blogspot.com" target="_blank">SilverlightedWeb</a></h4>
                <div class="blogItems">
                    <asp:GridView ID="gvSilverlightedWeb" runat="server" DataSourceID="SilverlightedWebObjectDataSource" SkinID="blogGrid">
                        <Columns>
                            <asp:TemplateField ItemStyle-BorderColor="Transparent" ControlStyle-BorderColor="Transparent">
                                <ItemTemplate>
                                    <div class="blogItem">
                                        <span style="float: left">
                                            <asp:HyperLink ID="HyperLink2" runat="server" Target="_blank" NavigateUrl='<%#Eval("Links[0].Uri") %>'>

                                                <asp:Label ID="Label2" runat="server" Text='<%# Bind("Title.Text") %>'></asp:Label>
                                            </asp:HyperLink>
                                        </span>
                                        <span style="float: right">
                                            <asp:Label ID="Label1" runat="server" Text='<%#String.Format("{0:dd MMM yyyy}", Eval("PublishDate")) %>'></asp:Label>
                                        </span>
                                        <br />
                                        <asp:Label ID="Label3" runat="server" Text='<%# TrimSubject(DataBinder.Eval(Container.DataItem, "Summary.Text").ToString())  %>'></asp:Label>
                                    </div>
                                </ItemTemplate>
                                <ControlStyle BorderColor="Transparent" />
                                <ItemStyle BorderColor="Transparent" />
                            </asp:TemplateField>
                        </Columns>
                    </asp:GridView>
                </div>
            </div>
        </div>
    </div>
    <asp:ObjectDataSource ID="JoyfulWPFObjectDataSource" runat="server"
        SelectMethod="GetPosts" TypeName="Joymononline.BlogDataProvider">
        <SelectParameters>
            <asp:Parameter DefaultValue="http://feeds2.feedburner.com/Joyfulwpf"
                Name="FeedUrl" Type="String" />
            <asp:Parameter DefaultValue="20" Name="count" Type="Int32" />
        </SelectParameters>
    </asp:ObjectDataSource>
    <asp:ObjectDataSource ID="SilverlightedWebObjectDataSource" runat="server"
        SelectMethod="GetPosts" TypeName="Joymononline.BlogDataProvider">
        <SelectParameters>
            <asp:Parameter DefaultValue="http://feeds2.feedburner.com/silverlightedweb"
                Name="FeedUrl" Type="String" />
            <asp:Parameter Name="count" Type="Int32" />
        </SelectParameters>
    </asp:ObjectDataSource>
    <asp:ObjectDataSource ID="JoymonsCodeObjectDataSource" runat="server"
        SelectMethod="GetPosts" TypeName="Joymononline.BlogDataProvider">
        <SelectParameters>
            <asp:Parameter DefaultValue="http://feeds2.feedburner.com/JoymonsCode"
                Name="FeedUrl" Type="String" />
            <asp:Parameter Name="count" Type="Int32" />
        </SelectParameters>
    </asp:ObjectDataSource>

</asp:Content>

