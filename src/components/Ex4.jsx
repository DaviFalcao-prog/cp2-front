// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>
      {/* Resolva aqui */}
      <div className="flex justify-center">
        <div className="w-full md:w-[24rem] bg-gray-500 g-4 p-4 rounded">
          <h1>Card Responsivo</h1>
          <p>Texto inserido no card responsivo</p>
          <button className="p-3 bg-blue-500 hover:bg-blue-600 transition-color text-white rounded">Botão</button>
        </div>

      </div>
    </div>
  );
}