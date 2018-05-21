import React from "react";

class Circle extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.color !== this.props.color;
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    // console.log(this.props);
    return <div className={`circle ${color}`} />;
  }
}

export default Circle;
