import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header, Sidebar, RecommendedVideos, SearchPage} from './components';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
         <Switch>
          <Route path="/search/:searchTerm">
            <div className={styles.app}>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className={styles.app}>
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
