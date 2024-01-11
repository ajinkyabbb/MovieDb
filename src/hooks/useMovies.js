import { useEffect, useState } from "react";

const KEY = "c45a857c193f6302f2b5061c3b85e743";

export default function useMovies(id) {
  const [movie, setMovie] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
        );

        if (!res.ok) {
          throw new Error("Something went wrong with fetching movie details");
        }

        const data = await res.json();

        if (data.Response === "False") {
          throw new Error("Movie not found");
        }

        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (id) {
      fetchMovieDetails();
    }

    // Cleanup logic, if needed
    return () => {
      // Cleanup logic, if needed
    };
  }, [id]);
  return { movie, isLoading, error };
}
