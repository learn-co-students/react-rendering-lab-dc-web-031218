import React from "react";

class Circle extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // which will return true only if the new color being passed in is different from the existing one.
    if (this.props.color === nextProps.color) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    console.log(this.props);
    return <div className={`circle ${color}`} />;
  }
}

export default Circle;
