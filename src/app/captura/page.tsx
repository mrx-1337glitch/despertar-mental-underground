'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://vmhipnidyvqelwhktjms.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtaGlwbmlkeXZxZWx3aGt0am1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MjY2MDQsImV4cCI6MjA3NjIwMjYwNH0.oBp6nC0rVuRlmkQj6D5hsHirhpLNEgLNQU8wHQaQ8AQ'
);

const schema = z.object({
  email: z.string().email('Email inválido'),
  question: z.string().min(10, 'Responda com pelo menos 10 caracteres'),
});

type FormData = z.infer<typeof schema>;

export default function Captura() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
  try {
    const { error } = await supabase
      .from('leads')
      .insert([{ email: data.email, question: data.question }]);

    if (error) {
      console.error('Erro Supabase:', error);
      alert('Falha ao enviar. Verifique o console para mais detalhes.');
    } else {
      setSubmitted(true);
    }
  } catch (err) {
    console.error('Erro geral:', err);
    alert('Erro inesperado. Veja o console.');
  }
};



  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
        <div className="matrix-bg"></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">ACESSO CONCEDIDO</h1>
            <p className="text-xl text-green-300">Você foi adicionado à lista de mentes despertas.</p>
            <Link
              href="/vendas"
              className="inline-block px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold text-lg rounded transition-colors duration-300"
            >
              RECEBER MANUAL DO DESPERTAR
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <div className="matrix-bg"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">ACESSO RESTRITO</h1>
            <p className="text-green-300 mb-8">
              Para continuar, prove que você está pronto para o despertar.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-3 py-2 bg-gray-900 border border-green-500 text-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="seu@email.com"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">O que te trouxe até aqui?</label>
              <textarea
                {...register('question')}
                className="w-full px-3 py-2 bg-gray-900 border border-green-500 text-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500 h-24"
                placeholder="Conte-me sua jornada..."
              />
              {errors.question && <p className="text-red-400 text-sm mt-1">{errors.question.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold text-lg rounded transition-colors duration-300"
            >
              ENTRAR NO SISTEMA
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
