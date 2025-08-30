import List from './List/List.jsx'

function App() {

  const fruits = [{ id: 1, name: "apple", calories: 95 },
  { id: 2, name: "orange", calories: 45 },
  { id: 3, name: "banana", calories: 105 },
  { id: 4, name: "coconut", calories: 159 },
  { id: 5, name: "pineapple", calories: 37 }];

  const vegatables = [{ id: 6, name: "potatoes", calories: 95 },
  { id: 7, name: "tomatoes", calories: 45 },
  { id: 8, name: "peppers", calories: 105 },
  { id: 9, name: "broccoli", calories: 159 },
  { id: 0, name: "mushrooms", calories: 37 }];

  return (
    <>
      {fruits.length > 0 &&
        <List items={fruits} category="Fruits" />}
      {vegatables.length > 0 &&
        <List items={vegatables} category="Vegatables" />}
    </>
  );

}

export default App
