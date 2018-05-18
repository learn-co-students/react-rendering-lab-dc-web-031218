import React from "react";

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, this.props);
    if (nextProps.rating > this.props.rating) {
      this.setState({ increasing: true }, () => console.log(this.state));
    } else if (nextProps.rating < this.props.rating) {
      this.setState({ decreasing: true }, () => console.log(this.state));
    }
  }
  render() {
    let trend = "stable";
    if (this.state.increasing) {
      trend = "increasing";
    } else if (this.state.decreasing) {
      trend = "decreasing";
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    );
  }
}

export default Rating;
