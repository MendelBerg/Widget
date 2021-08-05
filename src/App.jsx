import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Choose from './components/Choose';
import Role from './components/Role';
import Agreement from './components/Agreement';
import PageNotFound from './components/PageNotFound';
import { fetchAgreementText } from './common';

const App = () => {
  const [agreementText, setAgreementText] = useState('');

  useEffect(() => {
    fetchAgreementText().then(agreement => {
      setAgreementText(agreement);
    });
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container">
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Choose />
              </Route>
              <Route path="/role/:roleId">
                <Role />
              </Route>
              <Route path="/agreement">
                <Agreement agreementText={agreementText} />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </main>
    </>
  );
};

export default App;
