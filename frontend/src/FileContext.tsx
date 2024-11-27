import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

type FileContextType = {
    setFiles: React.Dispatch<React.SetStateAction<null | any[]>>;
    message: string;
    getMessage: () => Promise<void>;
    todos: any[];
    getTodos: () => Promise<void>;
    files: null | any[];
    getFiles: () => Promise<void>;
};

export const FileContext = createContext<FileContextType>({
    setFiles: () => {},
    message: '',
    getMessage: async () => {},
    todos: [],
    getTodos: async () => {},
    files: [],
    getFiles: async () => {},
});

// Hook to access context
export const useFileContext = () => useContext(FileContext);

export const FileContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [files, setFiles] = useState<null | any[]>(null);
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

    const getFiles = useCallback(async () => {
        try {
            const response = await fetch(`/api/files`, {
                method: 'GET',
            });
            if (response.status === 200) {
                const todosJson = await response.json();
                setFiles(todosJson);
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
        if (!files) {
            getFiles();
        }
        console.log('Files:', files);
    }, [files]);

    return (
        <FileContext.Provider value={{ setFiles, getMessage, message, getFiles, files, getTodos, todos }}>
            {children}
        </FileContext.Provider>
    );
};