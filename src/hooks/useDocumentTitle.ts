import { useLayoutEffect } from "react";

const useDocumentTitle = (prefix: string) => {
  useLayoutEffect(() => {
    if (prefix) {
      document.title = `${prefix} | PizzaApp`;
    }
  }, [prefix]);
};

export default useDocumentTitle;
