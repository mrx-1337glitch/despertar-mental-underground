'use client';

import Link from 'next/link';

export default function Vendas() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <div className="matrix-bg"></div>
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 glitch" data-text="MANUAL DO DESPERTAR">
              MANUAL DO DESPERTAR
            </h1>
            <p className="text-xl text-green-300">
               Acesso restrito a mentes selecionadas
            </p>
          </div>

          {/* Hook */}
          <section className="bg-gray-900 p-6 rounded border border-green-500">
            <h2 className="text-2xl font-bold mb-4 text-green-300">  - A Verdade Oculta</h2>
            <p className="text-green-400 leading-relaxed">
              Enquanto o mundo dorme em ilusões programadas, poucos descobrem o código fonte da realidade.
              Você está prestes a acessar informações que mudam tudo.
            </p>
          </section>

          {/* Problema */}
          <section className="bg-gray-900 p-6 rounded border border-green-500">
            <h2 className="text-2xl font-bold mb-4 text-green-300">  - A Matrix Mental</h2>
            <p className="text-green-400 leading-relaxed">
              Você sente que algo está errado. As regras do jogo parecem feitas para outros.
              Ansiedade, frustração, sensação de estar preso em um loop infinito.
              É porque você foi programado para acreditar em limitações que não existem.
            </p>
          </section>

          {/* Solução */}
          <section className="bg-gray-900 p-6 rounded border border-green-500">
            <h2 className="text-2xl font-bold mb-4 text-green-300">  - O Despertar</h2>
            <p className="text-green-400 leading-relaxed">
              O despertar mental underground é o processo de hackear sua própria mente.
              Quebrar as barreiras impostas, acessar o verdadeiro potencial humano.
              Não é magia, é ciência aplicada à consciência.
            </p>
          </section>

          {/* Entrega */}
          <section className="bg-gray-900 p-6 rounded border border-green-500">
            <h2 className="text-2xl font-bold mb-4 text-green-300"> * Duas Opções de Acesso</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Oferta 1 */}
              <div className="border border-green-600 p-6 rounded bg-gray-800">
                <h3 className="text-xl font-bold mb-4 text-green-200">  APERITIVO - R$197</h3>
                <ul className="space-y-2 text-green-400 mb-6">
                  <li>• Acesso imediato ao módulo básico</li>
                  <li>• Técnicas de reprogramação mental</li>
                  <li>• Exercícios práticos para começar</li>
                  <li>• Suporte via WhatsApp por 7 dias</li>
                </ul>
                <Link
                  href="https://wa.me/553173271764?text=Quero%20o%20Aperitivo%20-%20R%24197"
                  className="block text-center px-6 py-3 bg-green-600 hover:bg-green-500 text-black font-bold rounded transition-colors"
                >
                  PEGAR APERITIVO
                </Link>
              </div>

              {/* Oferta 2 */}
              <div className="border border-green-600 p-6 rounded bg-gray-800">
                <h3 className="text-xl font-bold mb-4 text-green-200">  METODOLOGIA COMPLETA - R$1997</h3>
                <ul className="space-y-2 text-green-400 mb-6">
                  <li>• Todos os módulos do despertar</li>
                  <li>• Acesso vitalício aos materiais</li>
                  <li>• Sessões individuais de mentoria</li>
                  <li>• Comunidade exclusiva underground</li>
                  <li>• Suporte contínuo e atualizações</li>
                </ul>
                <Link
                  href="https://wa.me/553173271764?text=Quero%20a%20Metodologia%20Completa%20-%20R%241997"
                  className="block text-center px-6 py-3 bg-green-600 hover:bg-green-500 text-black font-bold rounded transition-colors"
                >
                  ACESSAR METODOLOGIA COMPLETA
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gray-900 p-6 rounded border border-green-500">
            <h2 className="text-2xl font-bold mb-4 text-green-300">PRÓXIMO PASSO</h2>
            <p className="text-green-400 mb-6">
              Escolha seu nível de compromisso. O despertar não espera.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="https://wa.me/553173271764?text=Quero%20saber%20mais%20sobre%20a%20MATRIX"
                className="px-6 py-3 bg-green-600 hover:bg-green-500 text-black font-bold rounded transition-colors"
              >
                FALAR COM MENTOR
              </Link>
              <Link
                href="/"
                className="px-6 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black rounded transition-colors"
              >
                VOLTAR
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

