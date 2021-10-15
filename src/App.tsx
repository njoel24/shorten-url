import Header from './components/Header/Header';
import styles from './App.module.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.AppContainer} data-testid="App">
      <div className={styles.App} data-testid="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
