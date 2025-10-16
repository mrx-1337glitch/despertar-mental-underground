import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <div className="matrix-bg"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center space-y-8">
          <h1 className="glitch text-6xl md:text-8xl font-bold" data-text="DESPERTAR MENTAL UNDERGROUND">
            DESPERTAR MENTAL UNDERGROUND
          </h1>

          <p className="text-xl md:text-2xl text-green-300 max-w-2xl mx-auto">
            A verdade que eles não querem que você saiba.
            <br />
            O despertar começa aqui.
          </p>

          <div className="space-y-4">
            <Link
              href="/captura"
              className="inline-block px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold text-lg rounded transition-colors duration-300"
            >
              INICIAR DESPERTAR
            </Link>
            <p className="text-sm text-green-500">
              Apenas para mentes preparadas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
