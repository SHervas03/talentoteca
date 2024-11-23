function Introduction() {
    return (
        <>
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                        Innovando para Todos: Productos que Conectan a Tu Familia (¡y tu Mascota!)
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                        En colaboración con Kellogg's, estamos desarrollando productos que no solo nutren, sino que también fortalecen el vínculo entre toda tu familia, incluyendo a tus amigos peludos.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#prototipos" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-kelloggs hover:bg-kelloggsHover focus:ring-4 focus:ring-kelloggs">
                            Explora nuestros prototipos
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#contacto" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-kelloggsHover focus:z-10 focus:ring-4 focus:ring-gray-100">
                            Saber más
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Introduction;