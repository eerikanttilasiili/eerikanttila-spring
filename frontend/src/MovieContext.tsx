import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

type MovieContextType = {
    movies: any[];
    setMovies: React.Dispatch<React.SetStateAction<any[]>>;
    addMovie: (newMovie: any) => Promise<void>;
};

export const MovieContext = createContext<MovieContextType>({
    movies: [],
    setMovies: () => {},
    addMovie: async (newMovie: any) => {},
});

// Hook to access context
export const useMovieContext = () => useContext(MovieContext);

export const MovieContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [movies, setMovies] = useState<any[]>([]);

    const getMovies = useCallback(async () => {
        try {
            const response = await fetch(`/api/movies`, {
                method: 'GET',
            });
            if (response.status === 200) {
                const moviesJson = await response.json();
                setMovies(moviesJson);
            } else {
                console.error('Error! Please retry...');
            }
        } catch (e) {
            console.log('Error: ', e);
            throw new Error((e as Error).message);
        }
    }, []);

    const addMovie = useCallback(async (newMovie: any) => {
        try {
            const response = await fetch('/api/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMovie),
            });
    
            if (response.ok) {
                const addedMovie = await response.json();
                console.log('Movie added successfully:', addedMovie);
                setMovies(prevMovies => [...prevMovies, addedMovie]);
            } else {
                console.error('Failed to add movie:', response.status, response.statusText);
            }
        } catch (e) {
            console.log('Error: ', e);
        }
    }, []);

    useEffect(() => {
        //getMovies();
    }, [getMovies]);

    return (
        <MovieContext.Provider value={{ movies, setMovies, addMovie }}>
            {children}
        </MovieContext.Provider>
    );
};