function List(props) {

    const category = props.category;
    const itemList = props.items;

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHA
    //fruits.sort((a, b) => a.calories - b.calories); // NUMERIC

    //const lowCalFruit = fruits.filter(fruit => fruit.calories < 100); // Displays lowCalFruits

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);

    return (<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>);
}

export default List