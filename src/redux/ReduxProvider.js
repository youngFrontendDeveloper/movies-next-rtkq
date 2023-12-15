"use client";

import React, {useRef} from "react";
import { Provider } from "react-redux";
import { makeStore } from "./store";

export function ReduxProvider({ children }) {
  const storeRef = useRef();

  if(!storeRef.current){
    storeRef.current = makeStore();
  }

  return (
    <Provider store={ storeRef.current }>
      { children }
    </Provider>
  );
}
