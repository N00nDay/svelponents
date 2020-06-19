import OriginTable from "./Table.svelte";
import Header from "./Header.svelte";
import Title from "./Title.svelte";
import Extras from "./Extras.svelte";
import Filter from "./Filter.svelte";
import Columns from "./Columns.svelte";
import Content from "./Content.svelte";
import Row from "./Row.svelte";
import Cell from "./Cell.svelte";

const Table = OriginTable;
Table.Header = Header;
Table.Filter = Filter;
Table.Columns = Columns;
Table.Content = Content;
Table.Row = Row;
Table.Cell = Cell;
Table.Title = Title;
Table.Extras = Extras;

export default Table;
