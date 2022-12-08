import { Link } from "react-router-dom"
import { FcRating } from "react-icons/fc"
import "./Card.scss"

const imgUrl = import.meta.env.VITE_IMG;
type TCardProps = {
    movie: any
    showLink?: boolean
}

export function Card(props: TCardProps) {
    let { movie, showLink } = props;
    return (
        <div className="card">
            <div className="card__container">
                <img src={imgUrl + movie.poster_path} alt={movie.title} />
                <div className="card__container--content">
                <h2>{movie.title}</h2>

                <p>
                    <FcRating /> {movie.vote_average}
                </p>
                    <div className="card__container--button">
                {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}