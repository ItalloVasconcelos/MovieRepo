import { useState, useEffect } from "react"
import { Card } from "../../components/Card";
import { NavBar } from "../../components/NavBar";
import "../Home/Home.scss"
const movieUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
export function PopularPage() {
    const [topMovies, setTopMovies] = useState<any>([])

    const getTopRateMovies = async (url: any) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedURL = `${movieUrl}popular?${apiKey}`
        getTopRateMovies(topRatedURL)
    }, [])
    return (
        <div className="movie">
            <NavBar />
            <h1>Filmes Populares:</h1>
            <div className="movie__container">
                {topMovies.lenght === 0 && "Carregando..."}
                {topMovies.length > 0 && topMovies.map((movie: any) =>
                    <Card movie={movie} showLink={true} />
                )}
            </div>
        </div>
    )
}