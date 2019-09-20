import React from 'react';
import styles from './App.module.sass';

function App() {
  return (
    <div className={styles.App}>
      <header>Wil Asche</header>
      <section>
        <header>fwd</header>
        <p>is a simple url shortener written in node.js</p>
      </section>
      <section>
        <header>moment-natural</header>
        <p>
          is an extension to the popular moment.js date/time manipulation library
          that adds support for parsing and formating dates and times in a
          natural form.
        </p>
      </section>
      <section>
        <header>jira-js</header>
        <p>is an npm library to query a Jira server from node.js</p>
      </section>
      <section>
        <header>dotfiles</header>
        <p>
          Most of the configuration for my development environment and that of
          the applications I use.
        </p>
      </section>
    </div>
  );
}

export default App;
