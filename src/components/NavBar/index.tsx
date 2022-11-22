import { Link, useNavigate } from "react-router-dom";
import { FcSearch, FcCamcorderPro } from "react-icons/fc";
import "./Navbar.scss"
import { useState } from "react";
import { PopularPage } from "../../pages/Popular";
export function NavBar() {
    const [search, setSearch] = useState<any>("")
    const navigate = useNavigate()

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (!search) return;

        navigate(`/search?q=${search}`)
        setSearch("")
    }
    return (
        <div className="navbar">
            <nav className="navbar__content">
                <h2><Link className="navbar__content--logo" to="/"> <FcCamcorderPro size={24} /> MoviesRepo  </Link></h2>
                <Link to={`/popular/`}>Filmes Populares</Link>
                <form onSubmit={handleSubmit} className="navbar__content--form">
                    <input type="text" placeholder="Busque aqui seu filme" onChange={(e => setSearch(e.target.value))} value={search} />

                    <button type="submit"><FcSearch /></button>
                </form>
            </nav>
        </div>
    )
}