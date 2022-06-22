import React, { Component } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home/Home'
import Events from './Component/Event/Events'
import Footer from './Component/Footer'
import EventsDetails from './Component/Event/EventsDetails'

class App extends Component {
  state = {
    events: [],
  }

  getDetails = (detailname) => {
    let url = 'http://localhost:3000/Events'
    if (detailname) {
      url += '?Name=' + detailname
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ events: data }))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Events"
              element={<Events getDetails={this.getDetails} />}
            />
            <Route
              path="/Events/EventsDetails"
              element={<EventsDetails events={this.state.events} />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    )
  }
}

export default App
