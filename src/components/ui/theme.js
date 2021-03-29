import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#ff0000'
const orange = '#00ff00';

const theme = createMuiTheme({
	palette: {
		common: {
			blue,
			orange
		},
		primary: {
			main: blue,
		},
		secondary: {
			main: orange
		}
	},
	typography: {
		h6: {
			fontWeight: 300
		}
	}
});

export default theme;
