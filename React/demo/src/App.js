import "./App.css";
import Greeting from "./components/Greeting";
import FirstGoal from "./components/FirstGoal";
import Link from "./components/Link";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
function App() {
  // const name = "Quang";
  // const fn = (a, b) => a + b;'\n'
  const products = [
    {
      id: "p1",
      title: "Book",
      price: 59,
    },
    {
      id: "p2",
      title: "Carpet",
      price: 129,
    },
    {
      id: "p3",
      title: "Car",
      price: 1000,
    },
    {
      id: "p4",
      title: "Hat",
      price: 19,
    },
  ];
  const productList = products.map(({ id, title, price }) => (
    <Product key={id} id={id} title={title} price={price} />
  ));
  return (
    <div className="App">
      {/* <h1>Hello {name}</h1>
      <p>{fn(1, 2)}</p> */}
      {/* <Greeting />
      <Greeting /> */}
      {/* <h1>My Goal for this course</h1>
      <ul>
        <FirstGoal />
      </ul> */}
      <Greeting name="Minh" age={25} />
      <Greeting name="Quang" age={35} />
      <Link href="https://vnexpress.net/">Click to see</Link>
      <h3>List of products</h3>
      <ul>{productList}</ul>
      <ul>
        {products.map(({ id, title, price }) => (
          <Product key={id} id={id} title={title} price={price} />
        ))}
      </ul>
      <ProductList products={products} />
    </div>
  );
}

export default App;
