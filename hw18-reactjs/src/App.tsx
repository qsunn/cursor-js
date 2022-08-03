import "./App.css";
import { Post } from "./components/Post";

function App() {
  const ANAKIN_IMAGE =
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80";
  const RAY_IMAGE =
    "https://images.unsplash.com/photo-1623476408624-721c9185d569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80";

  return (
      <Post 
        author={{
          name: "Anakin Skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="New outfit, wdyt?"
        image={RAY_IMAGE}
        date={"26 февр."}
      />
  );
}

export default App;
