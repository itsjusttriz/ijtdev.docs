import { useEffect, useState } from 'react';

export const useScreenSize = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

	const handleResize = () => {
		setIsMobile(() => window.innerWidth <= 1024);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return isMobile;
};
