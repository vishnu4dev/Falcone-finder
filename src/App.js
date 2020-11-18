import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from './containers/Main';
import SearchResult from "./containers/SearchResult";
import Footer from "./components/Footer";
import ToastCard from "./components/ToastCard";
import store from "./store";
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Main} />
            <Route exact path="/report" component={SearchResult} />
            <ToastCard />
            <Footer />
          </div>
        </Router>
      </Provider>
  );
}

export default App;
