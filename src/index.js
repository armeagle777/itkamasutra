import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let postData = [
  { id: 1, post: "very good picture", likesCount: 17 },
  { id: 2, post: "very good picture2", likesCount: 11 },
  { id: 3, post: "very good picture3", likesCount: 27 }
];
let dialogData = [
  { id: 1, name: "Dima K" },
  { id: 2, name: "Karina" },
  { id: 3, name: "Masha" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Tanya" },
  { id: 6, name: "Marina" }
];
let messageData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "hi2" },
  { id: 3, message: "hi3" },
  { id: 4, message: "hi4" },
  { id: 5, message: "hi5" },
  { id: 6, message: "hi6" }
];
ReactDOM.render(
  <App postData={postData} dialogData={dialogData} messageData={messageData} />,
  document.getElementById("root")
);

serviceWorker.unregister();
