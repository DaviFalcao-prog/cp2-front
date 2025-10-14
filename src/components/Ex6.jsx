// Ex6 — Layout com Grid

// Crie um layout com cabeçalho, conteúdo principal e rodapé usando `grid`:


// - O Layout deve ter 20rem de altura total.
// - Cabeçalho ocupa 100% largura, 80px altura.
// - Conteúdo central ocupa o restante da tela.
// - Rodapé fixo embaixo (80px).

export default function Ex6() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex6 - Layout com Grid</h1>
      {/* Resolva aqui */}
      <div className="grid grid-rows-[80px, auto, 80px] h-[20rem]">
        <div className="w-full h-[80px] bg-amber-300">
          <p>Cabeçalho</p>
        </div>
        <div className="flex flex-grow bg-red-500">
          <p>Restante do conteudo</p>
        </div>
        <div className="h-[80px] bg-blue-400">
          <p>rodapé</p>
        </div>

      </div>
    </div>
  );
}
