import SpecialCard from "../cards/SpecialCard";
import Bruchesta from "../../images/bruschetta.png";
import GreekSalad from "../../images/greek salad.png";
import LemonDessert from "../../images/lemon dessert.jpeg";
import Menu from "../../images/menu.jpeg";

export default function Specials() {
  const specialsItem = [
    {
      id: 1,
      name: "Greek Salad",
      image: GreekSalad,
      price: "$12.99",
      description:
        "Refreshing salad, made with tomato, lettuce, feta cheese, and olives.Dressed with salt, hot pepper, and olive oil.",
    },
    {
      id: 2,
      name: "Bruschetta",
      image: Bruchesta,
      price: "$16.99",
      description:
        "Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.",
    },
    {
      id: 3,
      name: "Lemon Dessert",
      image: LemonDessert,
      price: "$8.50",
      description:
        "Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.",
    },
  ];
  return (
    <section className="specials">
      <article className="specials-topbar">
        <h1>This weeks specials</h1>
        <a
          className="action-button"
          href={Menu}
          target="_blank"
          rel="noreferrer"
        >
          Online Menu
        </a>
      </article>

      <section className="specials-cards">
        {specialsItem.map((item) => (
          <SpecialCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </section>
    </section>
  );
}
