import Item from "./Item";

export default function List({ items, onSelected }) {
  function clickHandler(item) {
    onSelected(item);
  }
  return items.map((item) => (
    <Item key={item.id} item={item} onClick={() => clickHandler(item)} />
  ));
}
