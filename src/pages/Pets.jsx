function Pets() {
  return (
    <div className="flex justify-center items-center m-32">
      <div className="text-center">
        <h1 className="mb-4 text-xl font-bold text-gray-800">Todavía no hay mascotas</h1>
        <a
          href="#"
          className="rounded-md bg-kelloggs px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-kelloggsHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Añadir
        </a>
      </div>
    </div>
  );
}

export default Pets;
