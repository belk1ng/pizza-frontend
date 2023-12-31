import withTitle from "@hocs/withTitle";
import Heading from "@components/heading";

const Cart = () => {
  return <Heading>Корзина</Heading>;
};

const CartWithTitle = withTitle(Cart, "Корзина");

export default CartWithTitle;
