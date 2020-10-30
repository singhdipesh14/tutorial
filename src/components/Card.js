import React from "react";

export default class Card extends React.Component {
    render() {
        return <div className="card">
            <div className="cardflex"><div><div className="cardTitle">A Simple Component</div>
                <div className="cardDescription">React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.

                    <br /><br />JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.</div></div>
                <div><img src="card.jpg" className="cardImg"/></div>
            </div>
            <div className="cardflex"><div>
                <div className="cardTitle">A Stateful Component</div>
                <div className="cardDescription">In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().</div></div>
                <div><img src="card.jpg" className="cardImg"/></div>
            </div>
            <div className="cardflex"><div>
                <div className="cardTitle">An Application</div>
                <div className="cardDescription">Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.</div></div>
                <div><img src="card.jpg" className="cardImg"/></div>
            </div>
            <div className="cardflex"><div>
                <div className="cardTitle">A Component Using External Plugins</div>
                <div className="cardDescription">React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the &lt;textarea&gt;’s value in real time.</div></div>
                <div><img src="card.jpg" className="cardImg"/></div>
            </div>
        </div>
    }
}