import OriginMenu from "./Menu.svelte";
import Item from "./Item.svelte";
import SubMenu from "./SubMenu.svelte";
import ItemGroup from "./ItemGroup.svelte";

let Menu = OriginMenu;
Menu.Item = Item;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;
export default Menu;
