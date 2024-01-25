import type { FC } from "react";

import Typography from "@components/ui/typography";

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
        <Typography className={classes["user-info__name"]}>
          {fullName}
        </Typography>
        <Typography className={classes["user-info__email"]}>{email}</Typography>
      </div>
    </section>
  );
};

export default UserCard;
