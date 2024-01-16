import './Home.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {styled, alpha} from '@mui/material/styles';
import StyledInputBase from '@mui/material/InputBase';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import {makeStyles} from '@mui/styles';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Home() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderWidth: '2px', // Dicke der Ränder
                    borderColor: 'white', // Farbe der Ränder standardmäßig auf weiß setzen
                },
                '&:hover fieldset': {
                    borderColor: 'white', // Farbe der Ränder bei Hover
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'white', // Farbe der Ränder bei Fokus
                },
            },
            '& .MuiInputBase-input': {
                color: 'black', // Textfarbe auf schwarz setzen
                backgroundColor: 'white', // Hintergrundfarbe auf weiß setzen
                padding: '1em', // Abstand von 1em hinzufügen
            },
            '& .MuiIconButton-root': {
                color: 'white', // Farbe des Lupen-Symbols
            },
        },
    }));


    const SearchField = () => {
        const classes = useStyles();

        const handleSearch = () => {
            // Hier können Sie die Suchlogik implementieren
            console.log('Suche...');
        };
    }
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography

                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',

                        }}
                    >

                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img src={'img.png'} style={{ width: '20%', height: '70%' }} />
                        </Box>
                    </Box>
                    <Box sx={{ width: '8%', height: '8%', marginRight: '2%', display: { xs: 'none', md: 'flex' } }}>
                        <img src={'img.png'} style={{ width: '100%', height: '100%' }} />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 0,
                            display: 'block',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >

                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 1,justifyContent:'end', display: { xs: 'none', md: 'flex' } }}>
                        <TextField
                            className={useStyles}
                            label="Suche"
                            variant="filled"
                            sx={{ background: 'white', borderRadius: 1, margin: '1em' }}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={SearchField} edge="end">
                                        <SearchIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                    </Box>


                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}

                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Home;