import type { ComponentType } from "react";

import useDocumentTitle from "@hooks/useDocumentTitle.ts";

const withTitle = <P extends Record<string, unknown>>(
  Component: ComponentType<P>,
  title: string
) => {
  return (props: P) => {
    useDocumentTitle(title);

    return <Component {...props} />;
  };
};

export default withTitle;
