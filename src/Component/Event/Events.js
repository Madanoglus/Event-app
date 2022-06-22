import React, { Component } from 'react'
import CategoryList from './CategoryList'
import CategoryName from './CategoryName'
import CityList from './CityList'

class Events extends Component {
  state = {
    events: [],
  }

  changeDetails = (eventsitems) => {
    this.props.getDetails(eventsitems.Name)
    console.log(eventsitems.Name)
  }

  Hide = () => {
    const madan = document.getElementById('madan')
    madan.style.display = 'none'
  }

  changeEvents = (category) => {
    this.getEvents(category.CategoryNameFilter)
    console.log(category.CategoryNameFilter)
  }
  changeCity = (city) => {
    this.getEventsCity(city.City)
    console.log(city.City)
  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents = (categoryname) => {
    let url = 'http://localhost:3000/Events'
    if (categoryname) {
      url += '?CurrentCategory=' + categoryname
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ events: data }))
  }
  getEventsCity = (categorycity) => {
    let url = 'http://localhost:3000/Events'
    if (categorycity) {
      url += '?City=' + categorycity
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ events: data }))
  }
  

  render() {
    return (
      <div className="events-container">
        <div className="events">
          <div className="categorylist">
            <CategoryList changeEvents={this.changeEvents} />
            <CityList id="madan" changeCity={this.changeCity} />
          </div>
          <div className="categoryname">
            <CategoryName
              events={this.state.events}
              changeDetails={this.changeDetails}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Events
