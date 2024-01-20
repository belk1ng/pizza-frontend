import { useState, useEffect } from "react";
import type { MouseEvent } from "react";

import classes from "./Ripple.module.css";
import type { RippleValues } from "./Ripple.types";

const Ripple = ({ duration = 900 }) => {
  const [ripples, setRipples] = useState<RippleValues[]>([]);

  useEffect(() => {
    let bounce: NodeJS.Timeout | undefined;

    if (ripples.length > 0) {
      bounce && clearTimeout(bounce);

      bounce = setTimeout(() => {
        setRipples([]);
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [ripples, duration]);

  const addRipple = (event: MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget.getBoundingClientRect();
    const size =
      container.width > container.height ? container.width : container.height;

    const x = event.pageX - container.x - container.width / 2;
    const y = event.pageY - container.y - container.width / 2;
    const id = Date.now();
    const newRipple = {
      x,
      y,
      size,
      id,
    };

    setRipples((prev) => [...prev, newRipple]);
  };

  return (
    <div className={classes.ripple} onMouseDown={addRipple}>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className={classes.ripple__element}
          style={{
            animationDuration: `${duration / 1000}s`,
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </div>
  );
};

export default Ripple;
