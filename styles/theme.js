import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';

const overrides = {
	...chakraTheme,
	styles: {
		global: {
			body: {
				minHeight: '100vh',
				margin: '0',
				padding: '0',
			},
		},
	},
	colors: {
		...chakraTheme.colors,
		primary: '#e24a55',
		secondary: '#8494af',
		tertiary: '#193971',
		labelColor: '#888',
	},
	fonts: {
		body: `'Nunito Sans',sans-serif`,
		heading: `'Sora',sans-serif`,
	},
};

const customTheme = extendTheme(overrides);

export default customTheme;
