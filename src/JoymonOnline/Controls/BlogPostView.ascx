<%@  Control Language="C#" AutoEventWireup="true"
    CodeBehind="BlogPostView.ascx.cs" Inherits="JoymonOnline.Controls.BlogPostView" %>
<div class="blogItem">
    <table role="presentation">
        <tr>
            <td>
                <asp:hyperlink id="HyperLink1" runat="server" target="_blank" navigateurl='<%#Eval("Links[0].Uri") %>'>
                                                <asp:Label ID="Label2" runat="server" Text='<%# Bind("Title.Text") %>'></asp:Label>
                                            </asp:hyperlink>
            </td>
            <td class="postedDate">
                <asp:label id="Label1" runat="server" text='<%#String.Format("{0:dd MMM yyyy}", Eval("PublishDate")) %>'></asp:label>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <asp:label id="Label3" runat="server" text='<%# TrimSubject(Eval("Summary.Text").ToString())  %>'></asp:label>
                </td>
        </tr>
    </table>
</div>
