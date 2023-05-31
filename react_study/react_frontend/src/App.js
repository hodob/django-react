import './App.css';



function MyButton() {
  return(
    <button>Click me!</button>
  )
}

const user = {
  name: 'John',
  imageUrl: 'https://i.pravatar.cc/300',
  imageSize: 100,
};
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function App() {
  const listItems = products.map((product) => (
    <li 
      key={product.id}
      style={{ color: product.isFruit ? 'red' : 'green' }}
    >
    {product.title}
      </li>
  ));

  return (
    <>
      {/* <h1>{user.name}</h1>
      <img src={user.imageUrl} alt={user.name} width={user.imageSize} />
      <MyButton /> */}
      <ul>
        <h1> test</h1>
        {listItems}
      </ul>
    </>
  );
}
export default App;
