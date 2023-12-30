import withTitle from "@/hocs/withTitle.tsx";

const Cart = () => {
  return <h1>Cart page</h1>;
};

const CartWithTitle = withTitle(Cart, "Корзина");

export default CartWithTitle;
