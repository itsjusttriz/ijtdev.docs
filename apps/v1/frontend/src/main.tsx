import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Routing } from './Router';
import { PageWrapper } from './components/PageWrapper';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';

const root = (
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<PageWrapper>
					<Routing />
				</PageWrapper>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')!).render(root);
