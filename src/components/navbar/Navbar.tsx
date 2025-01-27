function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                    Farmácia

                    <div className='flex gap-4'>
                        <button classname="px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white">Produtos</button>
                        <button classname="px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white">Categorias</button>
                        <button classname="px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white">Cadastrar Categorias</button>
                        <button classname="px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white">Cadastrar Produtos</button>
                        <button classname="px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white">Sair</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar