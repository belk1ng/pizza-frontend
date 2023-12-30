import { useEffect } from "react";

const useDocumentTitle = (prefix: string) => {
  useEffect(() => {
    if (prefix) {
      document.title = `${prefix} | PizzaApp`;
    }
  }, [prefix]);
};

export default useDocumentTitle;
