import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { NavBar } from "../../components/NavBar";
import "../Home/Home.scss"

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
export function SearchPage() {

    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")

    const [movies, setMovies] = useState<any>([])
    const getSearchMovies = async (url: any) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }

    useEffect(() => {
        const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`
        getSearchMovies(searchWithQueryUrl)
    }, [query])
    return (

        <div className="movie" >
            <NavBar />
            <h1>Resultados da busca: <span>{query}</span></h1>

            <div className="movie__container">
                {movies.lenght === 0 && "Carregando..."}
                {movies.length > 0 && movies.map((movie: any) =>
                    <Card movie={movie} showLink={true} />
                )}
            </div>
        </div>
    )
}