import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Product from "../Product";
import { ButtonHome, HeaderCart } from "./style";

function Cart() {
  const history = useHistory();

  const { cart } = useSelector((store) => store);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div>
      <HeaderCart>
        <ButtonHome onClick={() => history.push("/")}>
          Ir para a Página Inicial
        </ButtonHome>
      </HeaderCart>

      <h2>Total da compra: R$:{totalPrice.toFixed(2)} </h2>

      <div>
        {cart.map((product) => (
          <Product key={product.id} product={product} isRemovable />
        ))}
      </div>
    </div>
  );
}

export default Cart;
