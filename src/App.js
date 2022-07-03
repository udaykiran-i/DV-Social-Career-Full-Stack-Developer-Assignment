import React from "react";
import Login from "./components/Login/login";
import Design from "./components/Design-1/design";
import Design2 from "./components/Design-2/design2";
import Design3 from "./components/Design-3/design3";
import Menu from "./components/Menu/menu";
import SpecialMenu from "./components/SpecialMenu/specialMenu";

function App() {
  return (
    <div>
      <Login />
      <Design />
      <Design2 />
      <Design3 />
      <Menu />
      <SpecialMenu />
    </div>
  );
}


export default App;
