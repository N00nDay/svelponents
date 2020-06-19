import OriginPageHeader from "./PageHeader.svelte";
import Extras from "./Extras.svelte";
import Title from "./Title.svelte";
import SubTitle from "./SubTitle.svelte";

let PageHeader = OriginPageHeader;
PageHeader.Extras = Extras;
PageHeader.Title = Title;
PageHeader.SubTitle = SubTitle;

export default PageHeader;
