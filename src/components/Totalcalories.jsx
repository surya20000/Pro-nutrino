import React, { Component } from "react";
import './FoodBox.css';

export default class TotalCalorie extends React.Component {
  render() {
    return (
      <div className="flex2">
        <h3>{`${this.props.count}  ${this.props.name} = ${this.props.totalCal} calories`}</h3>
      </div>
    )
  }
}