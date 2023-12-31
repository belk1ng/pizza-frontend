import type { FC } from "react";

import classes from "./UserCard.module.css";
import type { UserCardProps } from "./UserCard.props";

const UserCard: FC<UserCardProps> = ({ fullName, email, avatarSource }) => {
  return (
    <section className={classes["user-info"]}>
      <img
        src={avatarSource ?? "/assets/pics/user-avatar.png"}
        alt="Аватар пользователя"
        className={classes["user-info__avatar"]}
      />

      <div className={classes["user-info__meta"]}>
        <h3 className={classes["user-info__name"]}>{fullName}</h3>
        <p className={classes["user-info__email"]}>{email}</p>
      </div>
    </section>
  );
};

export default UserCard;
