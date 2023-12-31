import Heading from "@components/heading";
import withTitle from "@hocs/withTitle";

const Cart = () => {
  return <Heading>Корзина</Heading>;
};

const CartWithTitle = withTitle(Cart, "Корзина");

export default CartWithTitle;
