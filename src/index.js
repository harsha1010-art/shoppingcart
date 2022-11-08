import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { InitialProducts } from "./Data";
import App from "./App";

const InitialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1
  },
  {
    id: 1,
    name: "Cheese",
    count: 5
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2
  }
];
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App data={InitialProducts} />
  </StrictMode>
);
