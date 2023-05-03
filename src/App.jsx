import Title from "./Title";
import Menu from "./Menu";
import menu from "./data";
import { useState } from "react";

const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories);
const tempItems = ["all", ...tempSet];

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
