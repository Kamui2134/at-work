import logo from './logo.svg';
import './App.css';

function App() {
  return (
		<div className='App'>
			<Header />
			<div id="">
				<Outlet />
			</div>
		</div>
	)
}

export default App;
