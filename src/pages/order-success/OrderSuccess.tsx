import { useNavigate } from "react-router-dom";

import Button from "@components/ui/button/Button";
import withTitle from "@hocs/withTitle";
import { ROOT_PATHS } from "@routes/paths";

import classes from "./OrderSuccess.module.css";

const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(ROOT_PATHS.root);
  };

  return (
    <section className={classes.section}>
      <img alt="Изображение пиццы" src="/assets/pics/pizza.png" />
      <p className={classes.section__message}>Ваш заказ успешно оформлен!</p>
      <Button
        size="large"
        className={classes.section__button}
        onClick={handleNavigate}
      >
        Сделать новый
      </Button>
    </section>
  );
};

const OrderSuccessWithTitle = withTitle(OrderSuccess, "Заказ оформлен");

export default OrderSuccessWithTitle;
