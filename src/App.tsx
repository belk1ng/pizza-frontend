import Button from "./components/button";
import Input from "./components/input";

import { useState, ChangeEvent } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setInputValue(inputValue);
  };

  return (
    <main>
      <Button>Text</Button>
      <Input
        autoFocus
        name="content"
        placeholder="Some text :)"
        label="Enter content"
        value={inputValue}
        onChange={handleInputChange}
      />
    </main>
  );
}

export default App;
