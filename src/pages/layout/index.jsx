import React, { Component } from "react";
import Demo from "../../component/demo";
import { Provider } from "../../utils/app.context.js";
import "./_index.css";

import BallWorld from "../ballWorld";

class Layout extends Component {
  state = {
    appContext: {
      asideState: "",
    },
  };

  updateAside = (value) => {
    this.setState({
      appContext: {
        asideState: value,
      },
    });
  };

  render() {
    const {
      state: {
        appContext,
        appContext: { asideState },
      },
      updateAside,
    } = this;
    let main = null;
    if (asideState === 'cirelList') {
      main = <BallWorld />;
    }
    return (
      <Provider value={appContext}>
        <div className="layout">
          {/* 头部区域 */}
          <header className="header"></header>
          {/* 主区域 */}
          <main className="main">
            {/* 侧边栏区域 */}
            <aside className="aside">
              <Demo updateAside={updateAside}></Demo>
            </aside>
            {/* 主要区域 */}
            <div className="body">{main}</div>
          </main>
          {/* 底部区域 */}
          <footer className="footer"></footer>
        </div>
      </Provider>
    );
  }
}

export default Layout;
