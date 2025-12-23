import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Lavender", category: "Aromatic", price: 10, desc: "Calming fragrance", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Mint", category: "Aromatic", price: 8, desc: "Fresh aroma", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Aloe Vera", category: "Medicinal", price: 12, desc: "Healing plant", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Tulsi", category: "Medicinal", price: 9, desc: "Immunity booster", img: "https://via.placeholder.com/100" },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="page">
      <h2>Our Plants</h2>

      {["Aromatic", "Medicinal"].map(section => (
        <div key={section}>
          <h3>{section} Plants</h3>
          <div className="grid">
            {plants.filter(p => p.category === section).map(p => (
              <div key={p.id} className="card">
                <img src={p.img} />
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
                <p>${p.price}</p>
                <button onClick={() => dispatch(addItem(p))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

