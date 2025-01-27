import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold hover:text-blue-300">Farmácia</Link>

                    <div className='flex gap-4'>
                        <button className="px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white">Produtos</button>
                        <Link to='/categorias' className="px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-white">Categorias</Link>
                        <Link to='/cadastrarcategoria' className="px-4 py-2 rounded-md bg-blue-100 text-blue-600 hover:underline hover:bg-blue-300 hover:text-white">Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar