import { Route, Routes } from 'react-router-dom';
import Paths from './routes';

import NavbarDom from '../components/Navbar';
const RouterDom = (props: any) => {
	console.log('Usando Router');
	return (
		<>
			<NavbarDom />
			<Routes>
				{(Paths || []).map((item: any, idx: any) => (
					<Route key={item.id} path={item.path} element={<item.component />} />
				))}
			</Routes>
		</>
	);
};

export default RouterDom;
