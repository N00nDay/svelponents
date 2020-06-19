import OriginList from "./List.svelte";
import Item from "./Item.svelte";
import Meta from "./Meta.svelte";

let List = OriginList;
List.Item = Item;
List.Meta = Meta;

export default List;
