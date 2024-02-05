import type { FC, ChangeEvent } from "react";
import { useState } from "react";

import Input from "@components/ui/input";
import useDebounce from "@hooks/useDebounce";

import type { SearchInputProps } from "./SearchInput.props";

const SearchInput: FC<SearchInputProps> = ({
  onDebouncedChange,
  debounceTimeout,
  ...props
}) => {
  const [searchString, setSearchString] = useState("");

  const debouncedHandleChange = useDebounce(
    () => onDebouncedChange(searchString),
    debounceTimeout
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchString(value);
    debouncedHandleChange();
  };

  return <Input {...props} value={searchString} onChange={handleChange} />;
};

export default SearchInput;
