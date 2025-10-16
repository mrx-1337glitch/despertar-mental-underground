export default function Vendas() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">O despertar começou.</h1>
      <p className="text-green-300 mb-8 max-w-lg">
        Clique abaixo para acessar o canal direto comigo e receber o material oficial do <b>Manual do Despertar</b>.
      </p>
      <a
        href="https://wa.me/553173271764"
        target="_blank"
        className="px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold text-lg rounded transition-colors duration-300"
      >
        ACESSAR O WHATSAPP
      </a>
    </div>
  );
}
