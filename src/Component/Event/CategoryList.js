import React, { Component } from 'react'


class CategoryList extends Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    this.getCategories()
  }

  getCategories = () => {
    fetch('http://localhost:3000/CategoryList')
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }))
  }
  render() {
    return (
      <div className="categorylist">
        <h1 className="categorylist-h1">Kendine Göre Bir Etkinlik Bul</h1>
        {this.state.categories.map((category) => (
          <div className="categorylist-item">
            <div
              onClick={() => this.props.changeEvents(category)}
              key={category.id}
              className="categorylist-items"
            >
              {category.CategoryName}
            </div>
          </div>
        ))}
      </div>
    )
  }
}
export default CategoryList
