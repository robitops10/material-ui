import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { IconButton, Avatar } from '@material-ui/core';
import { AppBar, Toolbar, Button, Tabs, Tab } from '@material-ui/core';
import { Menu, MenuItem, Drawer } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
// import ShareIcon from '@material-ui/icons/Share';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import MoreVertIcon from '@material-ui/icons/MoreVert';


import { Card, CardHeader, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';


const menus = ['home', 'about', 'contact', 'services'];
const subMenus = [
	{ path: 'services',	data: 'services' },
	{ path: 'software',	data: 'Custom Software Development' },
	{ path: 'mobile',		data: 'Mobile App Development' },
	{ path: 'website',	data: 'Website Development' },
];


const useStyle = makeStyles( theme => ({
	right: { marginLeft: 'auto'},
	center: {margin: '0 auto'},
	tab: { minWidth: '.2rem'},
	// services: theme.palette.common.main
	services: { backgroundColor: '#3f51b5', color: '#c5cae9'}
}));



const Header = () => {
	const classes = useStyle();
	const [ value, setValue ] = useState(0);
	const [ anchorEl, setAnchorEl ] = useState(null);
	const [ menuOpen, setMenuOpen ] = useState(false);
	const [ selectedIndex, setSelectedIndex ] = useState( 0 );
	const [ drawerOpen, setDrawerOpen ] = useState( false );

	useEffect(() => {
		switch( window.location.pathname ) {
			case '/' 					: 
			case '/home' 			: if( value !== 0 ) setValue( 0 ); break;
			case '/about' 		: if( value !== 1 ) setValue( 1 ); break;
			case '/contact' 	: if( value !== 2 ) setValue( 2 ); break;
			case '/services' 	: 
			case '/software' 	: 
			case '/webiste' 	: 
			case '/mobile' 		: if( value !== 3 ) setValue( 3 ); break;
			default: return;
		}
	},[value]);



	const handleMenu = (e) => {
		setAnchorEl( e.currentTarget );
		setMenuOpen( true );
	};
	const handleMenuClose = (event, index = 3) => {
		setAnchorEl( null );
		setMenuOpen( false );
		setValue( 3 );
		setSelectedIndex( index );
	};

	const drawer = <Fragment>
		<Drawer 
			open={drawerOpen} 
			onClose={() => setDrawerOpen( !drawerOpen )}
			anchor='left' 
			variant='temporary' 
		>
			<Button onClick={() => setDrawerOpen( !drawerOpen )} > close </Button>
			hello				
		</Drawer>

		<IconButton onClick={() => setDrawerOpen( !drawerOpen )}  color='inherit' >
			<MenuIcon />
		</IconButton>
	</Fragment>;

	return(
		<div>

			<AppBar position='fixed'  >
				<Toolbar>
				<Button color='inherit' component={Link} to='/' onClick={ () => setValue(0) } > Brand </Button>

					<Tabs value={value} onChange={ (e, value) => setValue(value) } className={classes.center} >
						{menus.map( (menu, index) => <Tab
							key={index}
							label={menu.replace( /\b./, match => match.toUpperCase() )}
							className={classes.tab} 
							component={Link}
							to={`/${menu}`}
							onMouseOver={ menu !== 'services' ? f => f : handleMenu }
						/>)}
					</Tabs>

					<Button color='inherit' > Login </Button>
					{drawer}
				</Toolbar>
			</AppBar>

			<Menu open={menuOpen} anchorEl={anchorEl} MenuListProps={{onMouseLeave: handleMenuClose}}
				classes={{ paper: classes.services }} elevation={0}
			>
				{subMenus.map( (item, index) => <MenuItem
					key={item.data} 
					component={Link} 
					to={`/${item.path}`} 
					onClick={ (event) => handleMenuClose(event, index)}
					selected={index === selectedIndex}
				> {item.data} </MenuItem>) }
			</Menu>

			<Toolbar />

			<br /> <br /> <br />

			<Card variant='outlined'>
				<CardHeader avatar={<Avatar />} title='Title' subheader='header' action='action' />

				<CardActionArea>
					<CardMedia component='img' title='React Icon' alt='img' src='/favicon.ico' />
						
					<CardContent>
						<Typography variant='h6'> Title of the image </Typography>
						<Typography variant='body1'> Demo description ... </Typography>
					</CardContent>	
				</CardActionArea>

				<CardActions>
					<Button component={Link} to='/' color='primary' size='small'>Share</Button>
					<Button component={Link} to='/' color='primary' size='small'>Learn More</Button>
				</CardActions>
			</Card>



		</div>
	);
};

export default Header;
