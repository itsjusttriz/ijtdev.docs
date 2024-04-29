import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { PageWrapper } from './components/PageWrapper';
import { Text } from './components/ui/Text';

export const Router = () => {
	return (
		<BrowserRouter>
			<PageWrapper>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route
						path='*'
						element={
							<Text bold size={'3rem'}>
								Not Found
							</Text>
						}
					/>
				</Routes>
			</PageWrapper>
		</BrowserRouter>
	);
};
