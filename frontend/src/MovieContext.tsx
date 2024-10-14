import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

type MovieContextType = {
    setMovies: React.Dispatch<React.SetStateAction<any[]>>;
    message: string;
    getMessage: () => Promise<void>;
    todos: any[];
    getTodos: () => Promise<void>;
};

export const MovieContext = createContext<MovieContextType>({
    setMovies: () => {},
    message: '',
    getMessage: async () => {},
    todos: [],
    getTodos: async () => {},
});

// Hook to access context
export const useMovieContext = () => useContext(MovieContext);

export const MovieContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [movies, setMovies] = useState<any[]>([]);
    const [message, setMessage] = useState<string>('');
    const [todos, setTodos] = useState<any[]>([]);

    const getMessage = useCallback(async () => {
        try {
            const response = await fetch(`/api/todos/message`, {
                method: 'GET',
            });
            if (response.status === 200) {
                const messageJson = await response.json();
                setMessage(messageJson.message);
            } else {
                console.error('Error! Please retry...');
            }
        } catch (e) {
            console.log('Error: ', e);
            throw new Error((e as Error).message);
        }
    }, []);

    const getTodos = useCallback(async () => {
        try {
            const response = await fetch(`/api/todos`, {
                method: 'GET',
            });
            if (response.status === 200) {
                const todosJson = await response.json();
                setTodos(todosJson.todos);
            } else {
                console.error('Error! Please retry...');
            }
        } catch (e) {
            console.log('Error: ', e);
            throw new Error((e as Error).message);
        }
    }, []);

    useEffect(() => {
        console.log('Movies:', movies);
    }, [movies]);

    return (
        <MovieContext.Provider value={{ setMovies, getMessage, message, getTodos, todos }}>
            {children}
        </MovieContext.Provider>
    );
};