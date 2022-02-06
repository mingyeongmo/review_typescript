import React from "react";
import Counter from "./Counter";
import MyForm from "./MyForm";

const App: React.FC = () => {
  const onSubmit = (forms: { name: string; description: string }) => {
    console.log(forms);
  };

  return <MyForm onSubmit={onSubmit} />;
};

export default App;
