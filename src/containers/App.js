import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from "react-redux";
import { Header } from '../components/Header';
import { MainRouter } from '../components/MainRouter';


function App({ genres }) {
  // const [genres] = useState(["action", "drama", "comedy", "thriller"]);
  return (
    <Router>
      <Header genres={genres} />
      <MainRouter genres={genres} />
    </Router >
  )
}

const mapStateToProps = (state) => {
  return { genres: state.genres };
}

export default connect(
  mapStateToProps
)(App);
