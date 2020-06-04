import React, { Component } from "react";
import PropTypes from "prop-types";
import { getRandomInteage, getRandomRgba } from "../../utils/random.js";
import "./_index.css";

export default class Circle extends Component {
  // 默认参数
  static defaultProps = {
    left: 0,
    top: 0,
  };

  // 参数配置
  static propsTypes = {
    parentElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    diameter: PropTypes.number,
    left: PropTypes.number,
    top: PropTypes.number,
    xSpeed: PropTypes.number,
    ySpeed: PropTypes.number,
    color: PropTypes.string,
  };

  // 组件状态
  state = {
    color: getRandomRgba(),
    left: this.props.left || 0,
    top: this.props.top || 0,
    xSpeed: this.props.xSpeed || getRandomInteage(50, 2000),
    ySpeed: this.props.ySpeed || getRandomInteage(50, 2000),
    diameter: this.props.diameter || getRandomInteage(20, 100),
  };

  // 组件加载后
  componentDidMount() {
    let {
      state: { diameter },
      props: { parentElement },
    } = this;

    const duration = 16;
    setInterval(() => {
      if (parentElement === null) {
        return;
      }
      if (typeof parentElement === "string") {
        parentElement = document.querySelector(parentElement) || parentElement;
        return;
      }

      const {
        clientWidth: containerWidth,
        clientHeight: containerHeigth,
      } = parentElement;
      const {
        state: { left, top, xSpeed, ySpeed },
      } = this;
      let newLeft = left + (xSpeed * duration) / 1000,
        newTop = top + (ySpeed * duration) / 1000;
      // 小球 横向 坐标越界
      if (newLeft >= containerWidth - diameter) {
        newLeft = containerWidth - diameter;
        this.setState({
          xSpeed: -xSpeed,
        });
      } else if (newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -xSpeed,
        });
      }
      // 小球 纵向 坐标越界
      if (newTop > containerHeigth - diameter) {
        newTop = containerHeigth - diameter;
        this.setState({
          ySpeed: -ySpeed,
        });
      } else if (newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -ySpeed,
        });
      }
      this.setState({
        left: newLeft,
        top: newTop,
      });
    }, duration);
  }

  // 渲染函数
  render() {
    const {
      state: { diameter, left, top, color },
    } = this;
    return (
      <div
        className="circle"
        style={{
          width: diameter,
          height: diameter,
          backgroundColor: color,
          left,
          top,
        }}
      ></div>
    );
  }
}
