import Header from './components/Header/Header';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.AppContainer} data-testid="App">
      <div className={styles.App} data-testid="App">
        <Header />
      </div>
    </div>
  );
}

export default App;
