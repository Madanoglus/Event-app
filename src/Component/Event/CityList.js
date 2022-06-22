import React, { Component } from 'react'


export default class CityList extends Component {
  state = {
    cities: [],
  }

  componentDidMount() {
    this.getCategories()
  }

  getCategories = () => {
    fetch('http://localhost:3000/CityList')
      .then((response) => response.json())
      .then((data) => this.setState({ cities: data }))
  }
  
  render() {
    return (
      <div>
        
        {this.state.cities.map((city) => (
          <div
            onClick={() => this.props.changeCity(city)}
            key={city.id}
            className="categorylist-items"
          >
            {city.City}
          </div>
        ))}
      </div>
    )
  }
}
