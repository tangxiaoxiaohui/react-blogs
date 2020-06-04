import React, { Component } from "react";
import { getDemoList } from "../../api/demo";
import "./_index.css";

export default class Demo extends Component {
  props;
  state = {
    list: [],
  };

  async componentDidMount() {
    console.log(`Demo 主键渲染完毕. componentDidMount`);
    const { list } = await getDemoList();
    this.setState({
      list,
    });
  }

  updateAside(value) {
    const {
      props: { updateAside },
    } = this;
    return () => {
      updateAside(value);
    };
  }

  render() {
    let list = this.state.list.map((val) => (
      <div key={val.id} onClick={this.updateAside(val.value)} className="item">
        {val.name}
      </div>
    ));
    return <div className="demo-wrap">{list}</div>;
  }
}
