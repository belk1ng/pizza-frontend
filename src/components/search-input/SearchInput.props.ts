import { Dispatch } from "react";

import { InputProps } from "@components/ui/input/Input.props.ts";

export interface SearchInputProps extends InputProps {
  onDebouncedChange: Dispatch<string>;
  debounceTimeout: number;
}
