import Product from "../Product/";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Header, ButtonCart } from "./style";

function Home() {
  const history = useHistory();
  const products = useSelector((state) => state.products);

  return (
    <div className="homeContainer">
      <Header>
        <ButtonCart onClick={() => history.push("/CartPage")}>
          Ver Carrinho
        </ButtonCart>
      </Header>
      <div className="homeMainContainer">
        {products.map((item, index) => {
          return <Product key={index} product={item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
