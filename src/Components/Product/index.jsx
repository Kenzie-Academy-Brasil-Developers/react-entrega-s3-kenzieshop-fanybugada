import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../Store/Modules/Cart/thunks";
import { Button } from "./style";

function Product({ product, isRemovable = false }) {
  const dispatch = useDispatch();

  const { id, name, price, img } = product;

  return (
    <div className="productDiv">
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <h4>Preço: R$:{price}</h4>
      {isRemovable ? (
        <Button onClick={() => dispatch(removeFromCartThunk(id))}>
          Remover do Carrinho
        </Button>
      ) : (
        <Button onClick={() => dispatch(addToCartThunk(product))}>
          Adicionar ao Carrinho
        </Button>
      )}
    </div>
  );
}

export default Product;
