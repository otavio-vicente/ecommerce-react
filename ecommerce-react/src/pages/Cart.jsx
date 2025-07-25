import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="p-8 max-w-4xl mx-auto text-center bg-gray-50 rounded-lg shadow-md min-h-[60vh]">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Seu carrinho está vazio</h1>
        <p className="text-gray-500">Adicione produtos para começar a comprar!</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-md min-h-[80vh]">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">Seu Carrinho</h1>
      <ul className="divide-y divide-gray-200 border rounded-lg">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-center py-6 px-4 sm:px-8 hover:bg-gray-100 transition"
          >
            <div className="flex items-center space-x-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md border"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border rounded">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-600 mt-1">Preço unitário: R$ {item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <p className="text-lg font-semibold text-gray-900">
                R$ {(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition"
                aria-label={`Remover ${item.name} do carrinho`}
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-between items-center border-t pt-6">
        <h2 className="text-2xl font-bold text-gray-900">Total:</h2>
        <p className="text-3xl font-extrabold text-blue-600">R$ {total.toFixed(2)}</p>
      </div>
      <button
        onClick={clearCart}
        className="mt-8 mr-2 w-full sm:w-auto px-6 py-3 bg-gray-800 text-white font-semibold rounded-md shadow hover:bg-gray-900 transition"
      >
        Limpar Carrinho
      </button>
      <button>
      
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
          >
            Continuar Comprando
          </Link>
        </div>
      
      </button>
      
    </div>
  );
}
