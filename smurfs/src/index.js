import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import "./index.css";
import App from "./components/App";
import { smurfDataReducer } from "./reducer";



const store = createStore(smurfDataReducer, applyMiddleware(thunk))
console.log( "this is my store", store.getState)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
