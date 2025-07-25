import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-blue-600 font-bold">
              R$ {product.price.toFixed(2)}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
