// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex5 - Navbar Responsiva</h1>
      {/* Resolva aqui */}
      <nav className="flex flex-col md:flex-row">
        <ul className="flex flex-col md:flex-row gap-5">
          <li><a href="#">Home</a></li>
          <li><a href="#">Promoções</a></li>
          <li><a href="#">Menu</a></li>
        </ul>
      </nav>
    </div>
  );
}