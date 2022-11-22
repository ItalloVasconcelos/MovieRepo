import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { NavBar } from "../../components/NavBar";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
export function MoviesPage() {
    const { id } = useParams()
    const [movies, setMovies] = useState<any>(null)
    const getMovies = async (url: any) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data)
    }

    const formatCurrency = (number: number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }


    useEffect(() => {
        const movieUrl = `${moviesUrl}${id}?${apiKey}`
        getMovies(movieUrl)
    }, [])


    return (
        <div className="details">
            <NavBar />
            {movies && (
                <> <Card movie={movies} showLink={false} />
                    <p>{movies.tagline}</p>
                    <h3>Orçamento: U
                        {formatCurrency(movies.budget)}
                    </h3>
                    <h3>Receita: U
                        {formatCurrency(movies.revenue)}
                    </h3>
                    <h3>Duração: {movies.runtime} minutos
                    </h3>
                    <h3>Descrição: {movies.overview}
                    </h3>
                    <h3>Data de estreia : {movies.release_date}
                    </h3>


                </>
            )}
        </div>
    )
}