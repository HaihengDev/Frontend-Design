import Card from './Card';
import items from '../data/data.json';

export default function CardLayout() {
  return (
    <section id="card-layout">
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          imgUrl={item.imgUrl}
          discount={item.discount}
          price={item.price}
        />
      ))}
    </section>
  );
}
