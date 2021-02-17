const ListItems = (props) => {
  const items = props.items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      changeStatus={props.changeStatus}
      name={item.txt}
      active={item.active}
    />
  ));

  return (
    <div className="list">
      <h3>Twoje zamówienie: </h3>
      <ul>{items}</ul>
    </div>
  );
};
