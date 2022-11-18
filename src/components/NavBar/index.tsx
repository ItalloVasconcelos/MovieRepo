import { Link } from "react-router-dom";
import { FcSearch, FcCamcorderPro } from "react-icons/fc";
export function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__content">
                <h2>
                    <Link to="/"> MoviesRepo <FcCamcorderPro /></Link>
                    <form action="">
                        <input type="text" placeholder="Busque aqui seu filme" />
                        <button type="submit"><FcSearch /></button>
                    </form>
                </h2>
            </div>
        </div>
    )
}