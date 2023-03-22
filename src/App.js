import { Provider } from 'react-redux';
import Container from './Components/Container/Container';
import { store } from './Redux/Store';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Provider store={store} >
        <Container />
      </Provider>
    </div>
  );
}

export default App;
