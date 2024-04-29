import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from './Router';

const root = (
	<React.StrictMode>
		<Router />
	</React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')!).render(root);
