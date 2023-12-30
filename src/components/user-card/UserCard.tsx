import { FC } from "react";
import { UserCardProps } from "./UserCard.props";
import classes from "./UserCard.module.css";

const UserCard: FC<UserCardProps> = ({ fullName, email, avatarSource }) => {
  return (
    <section className={classes["user-info"]}>
      <img
        src={avatarSource ?? "/assets/pics/user-avatar.png"}
        alt="User avatar"
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
