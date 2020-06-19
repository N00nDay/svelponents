import OriginCard from "./Card.svelte";
import Action from "./Action.svelte";
import Actions from "./Actions.svelte";
import Body from "./Body.svelte";
import Cover from "./Cover.svelte";
import Header from "./Header.svelte";
import HeaderExtras from "./HeaderExtras.svelte";

let Card = OriginCard;
Card.Action = Action;
Card.Actions = Actions;
Card.Body = Body;
Card.Cover = Cover;
Card.Header = Header;
Card.Header.Extras = HeaderExtras;

export default Card;
