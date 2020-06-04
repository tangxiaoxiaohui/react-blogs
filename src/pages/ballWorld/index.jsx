import React, { PureComponent } from "react";
import Circle from "../../component/circle";
import "./_index.css";

const CircleListRef =  React.createRef()

class CircleList extends PureComponent {
  state = {
    circleList: [],
  };

  componentDidMount() {
    let timer = setInterval(() => {
      const list = this.state.circleList;
      this.setState({
        circleList: [
          ...list,
          <Circle parentElement={CircleListRef.current} key={list.length} />,
        ],
      });
      if (list.length >= 5) {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return <div ref={CircleListRef} className="circle-list">{this.state.circleList}</div>;
  }
}

export default CircleList;
