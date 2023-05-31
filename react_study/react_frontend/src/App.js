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
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.imageUrl} alt={user.name} width={user.imageSize} />
      <MyButton />
    </div>
  );
}
export default App;
