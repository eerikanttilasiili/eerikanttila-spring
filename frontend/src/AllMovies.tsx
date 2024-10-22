import { useMovieContext } from './MovieContext';
import {
    Container,
    Typography,
    Button
} from '@mui/material';

const AllMovies = () => {
    const { message, getMessage, todos, getTodos, } = useMovieContext();
    //const [searchTerm, setSearchTerm] = useState('');
/*
    const filteredMovies = searchTerm
        ? movies.filter((movie) =>
            movie?.name?.includes(searchTerm)
          )
        : movies; // List all movies if no search term
*/
    return (
        <Container maxWidth="md" component="main" sx={{ padding: '2rem 0' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={getMessage}
            sx={{ display: 'block', margin: '0 auto', marginBottom: '2rem' }}
          >
            Fetch message!!!
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={getTodos}
            sx={{ display: 'block', margin: '0 auto', marginBottom: '2rem' }}
          >
            Get todos!
          </Button>

            <><Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
              {message}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                {JSON.stringify(todos)}
            </Typography></>
          {/*
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: 'chocolate' }}>
            Current TODOS here:
          </Typography>
          
          <TextField
            label="Search by Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ marginBottom: '2rem', backgroundColor: 'white' }}
          />
    
          <Grid container spacing={3}>
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie: any) => (
                <Grid item xs={12} sm={6} md={4} key={movie?.id}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ color: 'chocolate' }}>
                        {movie?.name || 'Untitled'} ({movie?.year})
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        Directed by: {movie?.director?.firstName} {movie?.director?.lastName}
                      </Typography>
      
                      <Box mb={1}>
                        {movie?.genres?.map((genre: any, index: number) => (
                          <Chip
                            key={index}
                            label={genre}
                            size="small"
                            sx={{ marginRight: '4px', marginBottom: '4px', backgroundColor: 'chocolate' }}
                          />
                        ))}
                      </Box>

                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        Starring:
                      </Typography>
                      <Box component="ul" sx={{ paddingLeft: '1rem', margin: '0' }}>
                        {movie?.actors?.map((actor: any, index: number) => (
                          <Box component="li" key={index} sx={{ listStyleType: 'disc' }}>
                            {actor?.firstName} {actor?.lastName}
                          </Box>
                        ))}
                      </Box>
      
                      <Typography variant="body2" color="textSecondary" paragraph>
                        {movie?.synopsis || 'No description available.'}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary" sx={{ marginTop: '2rem', textAlign: 'center' }}>
                No movies found...
              </Typography>
            )}
          </Grid>*/}
        </Container>
    );
};

export default AllMovies;