import React from "react";

const appContext = React.createContext();

// 上下文提供者
export const Provider = appContext.Provider;
// 上下文消费
export const Consumer = appContext.Consumer;
// 上下文
export default appContext;
