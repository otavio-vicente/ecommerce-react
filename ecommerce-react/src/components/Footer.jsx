import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-3 text-center sm:text-left">
        {/* Sobre a loja */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Surf Shop</h3>
          <p className="text-sm text-gray-300">
            As melhores pranchas para todas as ondas. Qualidade e estilo para surfistas de verdade.
          </p>
        </div>

        {/* Links úteis */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Links</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Início</a></li>
            <li><a href="#" className="hover:text-white">Produtos</a></li>
            <li><a href="#" className="hover:text-white">Carrinho</a></li>
            <li><a href="#" className="hover:text-white">Contato</a></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Redes Sociais</h4>
          <div className="flex justify-center sm:justify-start gap-4 text-xl text-gray-400">
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaFacebook className="hover:text-blue-500" /></a>
            <a href="#"><FaEnvelope className="hover:text-yellow-400" /></a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-sm text-center py-4 text-gray-400">
        &copy; {new Date().getFullYear()} Surf Shop. Todos os direitos reservados.
      </div>
    </footer>
  );
}
