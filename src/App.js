import './App.css';
import HeaderTitle from './components/headerTitle/HeaderTitle';
import TipCalculator from './Features/TipCalculator/TipCalculator';

function App() {
	return (
		<>
			<HeaderTitle />
			<div className='main_container'>
				<TipCalculator />
			</div>
		</>
	);
}

export default App;
