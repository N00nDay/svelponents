import OriginDrawer from "./Drawer.svelte";
import Header from "./Header.svelte";
import Body from "./Body.svelte";
import Footer from "./Footer.svelte";

let Drawer = OriginDrawer;
Drawer.Header = Header;
Drawer.Body = Body;
Drawer.Footer = Footer;

export default Drawer;
