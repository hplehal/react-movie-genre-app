import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from "react-redux";
import Header from '../components/Header';
import MainRouter from '../components/MainRouter';


const App = ({ genres }) => {
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
