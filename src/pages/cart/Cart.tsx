import Heading from "@components/heading";
import withTitle from "@hocs/withTitle";

const Cart = () => {
  return (
    <header>
      <Heading>Корзина</Heading>
    </header>
  );
};

const CartWithTitle = withTitle(Cart, "Корзина");

export default CartWithTitle;
