import { imageConvert } from '../services/imageConvert';

type Props = {
  name: string;
  price: number;
  discount: number;
  imgUrl: string;
};

export default function Card({ name, imgUrl, price, discount }: Props) {
  const newPrice = price - price * (discount / 100);

  return (
    <figure>
      <img src={imageConvert(imgUrl)} alt={name} />
      <figcaption>{name}</figcaption>

      {discount > 0 && <span className="discount-badge">-{discount}%</span>}

      <div className="price-wrapper">
        {discount > 0 ? (
          <div>
            <p className="old-price">{price}</p>
            <p className="new-price">{newPrice}</p>
          </div>
        ) : (
          <p className="new-price">${newPrice}</p>
        )}
      </div>

      <button>Add to Cart</button>
    </figure>
  );
}
