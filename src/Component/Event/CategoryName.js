/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CategoryName extends Component {
  render() {
    return (
      <div className="categoryname-conteiner">
        {this.props.events.map((eventsitems) => (
          <div className="categories">
            <div className="categories-img">
              <Link to="/Events/EventsDetails">
                <img src={eventsitems.imgUrl} />
              </Link>
            </div>
            <div>
              <div className="categories-name">
                <h1 onClick={() => this.props.changeDetails(eventsitems)}>
                  <Link to="/Events/EventsDetails">{eventsitems.Name}</Link>
                </h1>
              </div>
              <div className="categories-title">
                <h1>{eventsitems.Title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
export default CategoryName
