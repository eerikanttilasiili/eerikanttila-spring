import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
} from '@mui/material';
import { useMovieContext } from './MovieContext';

const AddNewComponent = () => {
    const navigate = useNavigate();
    const { addMovie } = useMovieContext();

    // State for form fields
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [genres, setGenres] = useState('');
    const [ageLimit, setAgeLimit] = useState('');
    const [rating, setRating] = useState('');
    const [actors, setActors] = useState('');
    const [director, setDirector] = useState('');
    const [synopsis, setSynopsis] = useState('');

    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Create new movie object
        const newMovie = {
            name,
            year: parseInt(year),
            genres: genres.split(',').map((genre) => genre.trim()),
            ageLimit: parseInt(ageLimit),
            rating: parseInt(rating),
            actors: actors.split(';').map((actor) => {
                const [firstName, lastName] = actor.split(',').map(part => part.trim());
                return { firstName, lastName };
            }),
            director: {
                firstName: director.split(' ')[0],
                lastName: director.split(' ')[1] || ''
            },
            synopsis
        };

        // Call the addMovie function from context
        addMovie(newMovie);
        
        // Navigate to another page after saving
        navigate('/'); // Redirect to home or movies list page
    };

    return (
        <Container maxWidth="md" component="main">
            <Typography variant="h4" gutterBottom>
                Add New Movie
            </Typography>

            <form onSubmit={handleSubmit}>
                <Box mb={2}>
                    <TextField
                        style={{border: '1px solid red'}}
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Year"
                        variant="outlined"
                        type="number"
                        fullWidth
                        margin="normal"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Genres (comma-separated)"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={genres}
                        onChange={(e) => setGenres(e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Age Limit"
                        variant="outlined"
                        type="number"
                        fullWidth
                        margin="normal"
                        value={ageLimit}
                        onChange={(e) => setAgeLimit(e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Rating"
                        variant="outlined"
                        type="number"
                        fullWidth
                        margin="normal"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Actors (format: FirstName,LastName; FirstName,LastName)"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={actors}
                        onChange={(e) => setActors(e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Director (format: FirstName LastName)"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Synopsis"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        value={synopsis}
                        onChange={(e) => setSynopsis(e.target.value)}
                    />
                </Box>
                <Button type="submit" variant="contained" color="primary">
                    Add Movie
                </Button>
            </form>
        </Container>
    );
};

export default AddNewComponent;