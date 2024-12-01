import { useState, useEffect } from "react";

function Pets() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Comprobar el valor de isRegistered al montar el componente
  useEffect(() => {
    const registeredStatus = sessionStorage.getItem("isRegistered");
    setIsRegistered(registeredStatus === "true");
  }, []); // Se ejecuta una vez cuando el componente se monta

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex justify-center items-center m-32">
      <div className="text-center">
        {isRegistered ? (
          <>
            <h1 className="mb-4 text-xl font-bold text-gray-800">Todavía no hay mascotas</h1>
            <button
              onClick={openModal}
              className="rounded-md bg-kelloggs px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-kelloggsHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Añadir
            </button>
          </>
        ) : (
          <h1 className="mb-4 text-xl font-bold text-gray-800">Necesario iniciar sesión</h1>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="relative w-full max-w-xl bg-white p-5 rounded-lg">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-900">Añadir Mascota</h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal Body with Form */}
            <div className="space-y-4 mt-4">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="breed"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Raza
                  </label>
                  <input
                    type="text"
                    id="breed"
                    className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="weight"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Peso
                  </label>
                  <input
                    type="number"
                    id="weight"
                    className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Edad
                  </label>
                  <input
                    type="number"
                    id="age"
                    className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="diseases"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Enfermedades
                  </label>
                  <input
                    type="text"
                    id="diseases"
                    className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="physicalActivity"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Actividad física
                  </label>
                  <input
                    type="text"
                    id="physicalActivity"
                    className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="size"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Tamaño
                  </label>
                  <select
                    id="size"
                    className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="large">Grande</option>
                    <option value="medium">Mediano</option>
                    <option value="small">Pequeño</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="otherConsiderations"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Otras consideraciones/Preferencias
                  </label>
                  <textarea
                    id="otherConsiderations"
                    className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    rows="4"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-kelloggs px-4 py-2 rounded-lg"
                  >
                    Guardar Mascota
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pets;
