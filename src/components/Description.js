import React from "react";

export default class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <div className="fd">
          <div className="ft">Declarative</div>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
          <br />
          <br />
          Declarative views make your code more predictable and easier to debug.
        </div>
        <div className="sd">
          <div className="ft">Component-Based</div>
          Build encapsulated components that manage their own state, then
          compose them to make complex UIs.
          <br />
          <br /> Since component logic is written in JavaScript instead of
          templates, you can easily pass rich data through your app and keep
          state out of the DOM.
        </div>
        <div className="td">
          <div className="ft">Learn Once, Write Anywhere</div>
          We don’t make assumptions about the rest of your technology stack, so
          you can develop new features in React without rewriting existing code.
          <br />
          <br />
          React can also render on the server using Node and power mobile apps
          using{" "}
          <a href="#" className="reactnative">
            React Native
          </a>
          .
        </div>
      </div>
    );
  }
}
