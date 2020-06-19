import OriginLayout from "./Layout.svelte";
import Header from "./Header.svelte";
import Sider from "./Sider.svelte";
import Footer from "./Footer.svelte";
import Content from "./Content.svelte";

let Layout = OriginLayout;
Layout.Header = Header;
Layout.Sider = Sider;
Layout.Footer = Footer;
Layout.Content = Content;
export default Layout;
