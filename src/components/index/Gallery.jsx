function Gallery() {
    return (
        <>
            <div className="relative px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-32">
                    <div className="text-center">
                        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            Innovando para Todos: Productos que Conectan a Tu Familia (¡y tu Mascota!)
                        </h1>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                            En colaboración con Kellogg's, estamos desarrollando productos que no solo nutren, sino que también fortalecen el vínculo entre toda tu familia, incluyendo a tus amigos peludos.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-kelloggs px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-kelloggsHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Empezar
                            </a>
                            <a href="#" className="text-sm/6 font-semibold text-gray-900">
                                Saber más <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;