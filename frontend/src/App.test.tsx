import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MovieContext } from './MovieContext';
import AllMovies from './AllMovies';

// Mock the MovieContext to provide a test value
const mockMovies = [
    {
        id: 1,
        name: 'Avengers: Endgame',
        year: 2018,
        director: { firstName: 'Anthony', lastName: 'Russo' },
        genres: ['Adventure', 'Sci-fi'],
        actors: [
            { firstName: 'Keanu', lastName: 'Reeves' },
            { firstName: 'Carrie-Anne', lastName: 'Moss' }
        ],
        synopsis: 'After the devastating events of Avengers: Infinity War (2018)...'
    },
    {
        id: 2,
        name: 'Downtown Abbey',
        year: 2019,
        director: { firstName: 'Michael', lastName: 'Enger' },
        genres: ['Drama'],
        actors: [
            { firstName: 'Michelle', lastName: 'Dockery' },
            { firstName: 'Matthew', lastName: 'Goode' }
        ],
        synopsis: 'Wallace and his loyal dog, Gromit, set out to...'
    }
];

// Mock the context functions
const mockSetMovies = jest.fn();
const mockAddMovie = jest.fn();

const renderWithContext = (component: any) => {
    return render(
        <MovieContext.Provider
            value={{
                movies: mockMovies,
                setMovies: mockSetMovies,
                addMovie: mockAddMovie,
            }}
        >
            <MemoryRouter>{component}</MemoryRouter>
        </MovieContext.Provider>
    );
};

test('renders the movie list correctly', () => {
    renderWithContext(<AllMovies />);

    expect(screen.getByText(/Avengers: Endgame/i)).toBeInTheDocument();
    expect(screen.getByText(/Downtown Abbey/i)).toBeInTheDocument();
    expect(screen.queryByText(/Avengers: Endgame 2/i)).not.toBeInTheDocument();
});