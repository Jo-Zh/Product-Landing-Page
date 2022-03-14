import React from "react";
import MyForm from "./MyForm";
// import "./app.css";
const App = () => {
  return (
    <div>
      {/* <!-- this is navigation part --> */}
      <header id="header" className="flex-nav">
        <div className="logo">
          <img id="header-img" src="../img/cakelogo.svg" alt="logo" />
        </div>

        <nav id="nav-bar">
          <ul>
            <li>
              <strong>Product-information</strong>
            </li>
            <li>
              <strong>Price</strong>
            </li>
            <li>
              <strong>Contact</strong>
            </li>
          </ul>
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"
              fill="#4C4F5A"
            ></path>
          </svg>
          {/* <!-- <path d="M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z" fill="#4C4F5A"></path> --> */}
        </nav>
      </header>
      {/* <!-- this is product introduction part --> */}
      <main className="flex-info-small flex-info">
        <h1 className="title">title</h1>

        <p id="info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          ex iusto repellat suscipit! Ipsa nobis aut inventore sapiente
          reiciendis consequuntur commodi quidem eos harum dolorum quasi, optio
          officia suscipit aliquid?
        </p>
        <MyForm />
        <button type="button" className="btn btn-info">
          Show/Hide Video
        </button>
        {/* { <!-- <div class="showVideo">
            <iframe width="560" height="300" src="https://www.youtube.com/embed/dOjryZ6rOpE"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div> -->} */}
      </main>
      <img src="../img/apple-pie.jpg" alt="apple pie" />
      <h1>This is my Landing page in React</h1>;
    </div>
  );
};

export default App;
