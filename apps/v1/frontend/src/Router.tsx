import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/Home';
import { NotFound } from './pages/NotFound';

export const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};
