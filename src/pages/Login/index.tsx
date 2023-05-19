import { useState, ChangeEvent } from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Box, Grid, Typography, Toolbar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import imgLogin from "../../assets/img/login1.png";
import { useAuth } from '../../context/Auth/useAuth';
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.primary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/in/paulaso/" target='_blank'>
                Paula Soares
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Login = () => {
    const [key, setKey] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();

    const handleKeyInput = (event: ChangeEvent<HTMLInputElement>) => {
        setKey(event.target.value);
    }

    const handleLogin = async () => {
        try {
            await auth.login(key);
            setErrorMessage(false);
            navigate("/home");
        }
        catch (error) {
            console.error(error);
            setErrorMessage(true);
            return error;
        }
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={false}
                md={8}
                sx={{
                    backgroundImage: `url(${imgLogin})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',

                }}
            />
            <Grid item xs={12} sm={12} md={4}>
                <Toolbar />
                <Box
                    sx={{
                        mx: 4,
                        my: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="key"
                            label="API Key"
                            name="key"
                            autoComplete="key"
                            autoFocus
                            value={key}
                            onChange={handleKeyInput}
                            error={errorMessage}
                            helperText={errorMessage ? "Verifique se a chave está correta" : ""}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;