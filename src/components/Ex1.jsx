// Ex1 — Botão estilizado com Tailwind

// Crie um botão centralizado com a cor azul, texto branco, padding, bordas arredondadas e efeito `hover` para escurecer a cor.

export default function Ex1() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex1 - Botão Estilizado</h1>
      {/* Resolva aqui */}
      <div className="flex justify-center">
        <button className="p-3 bg-blue-500 hover:bg-blue-600 transition-color text-white rounded">Botão</button>
      </div>
    </div>
  );
}