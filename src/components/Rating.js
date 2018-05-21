import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  componentWillReceiveProps = (nextProps) => {
    console.log("Survey::componentWillReceiveProps()");
    console.log("this.props: ", this.props);
    console.log("nextProps: ", nextProps);
    if(nextProps.rating > this.props.rating){ //increasing
      this.setState({
        increasing: true,
        decreasing: false
      }, ()=>console.log(this.state))
    } else if (nextProps.rating < this.props.rating){ //decreasing
      this.setState({
        increasing: false,
        decreasing: true
      }, ()=>console.log(this.state))
    } else{ //maintaining
      this.setState({
        increasing: false,
        decreasing: false
      })
    }
  }

  // shouldComponentUpdate = (nextProps, nextState) =>{
  //   console.log("Survey::shouldComponentUpdate()");
  //   console.log("this.props.rating", this.props.rating);
  //   console.log("nextProps.rating", nextProps.rating);
  //   return this.props.rating !== nextProps.rating;
  // }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;
