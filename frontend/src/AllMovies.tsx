import { useFileContext } from './FileContext';
import {
    Container,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';

const AllMovies = () => {
    const { message, getMessage, files, todos, getTodos } = useFileContext();

    //console.log('files:', files);

    return (
        <Container maxWidth="md" component="main" sx={{ padding: '2rem 0' }}>
            <div style={{ border: '1px solid gray', borderRadius: '15px', marginBottom: '20px' }}>
                <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                    List of files:
                    </Typography>
                    <List>
                    {files && !!files.length ? (
                        files.map((file, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={file.fileOriginalName || `File ${index + 1}`} />
                            </ListItem>
                        ))
                    ) : (
                        <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                            {files ? "List is empty" : "Loading..."}
                        </Typography>
                    )}
                    </List>                
            </div>
            <div style={{ border: '1px solid gray', borderRadius: '15px' }}>
                <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                    Older:
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={getMessage}
                    sx={{ display: 'block', margin: '0 auto', marginBottom: '2rem' }}
                >
                    Main 1050!
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={getTodos}
                    sx={{ display: 'block', margin: '0 auto', marginBottom: '2rem' }}
                >
                    Get todos!
                </Button>

                <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                    {message}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                    {JSON.stringify(todos)}
                </Typography>
            </div>
        </Container>
    );
};

export default AllMovies;