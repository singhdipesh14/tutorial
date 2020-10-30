import React from "react";

export default class Card extends React.Component {
    render() {
        return <div className="card">
            <div className="cardflex"><div><div className="cardTitle">A Simple Component</div>
                <div className="cardDescription">React components implement a <span className="editText">render()</span> method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by <span className="editText">render()</span> via <span className="editText">this.props</span>.

                    <br /><br />JSX is optional and not required to use React. Try the <a href="#" className="reactnative">Babel REPL</a> to see the raw JavaScript code produced by the JSX compilation step.</div></div>
                <div><img src="https://via.placeholder.com/728x300.png" className="cardImg" /></div>
            </div>
            <div className="cardflex"><div>
                <div className="cardTitle">A Stateful Component</div>
                <div className="cardDescription">In addition to taking input data (accessed via <span className="editText">this.props</span>), a component can maintain internal state data (accessed via <span className="editText">this.state</span>). When a component’s state data changes, the rendered markup will be updated by re-invoking <span className="editText">render()</span>.</div></div>
                <div><img src="https://via.placeholder.com/728x300.png" className="cardImg" /></div>
            </div>
            <div className="cardflex"><div>
                <div className="cardTitle">An Application</div>
                <div className="cardDescription">Using <span className="editText">props</span> and <span className="editText">state</span>, we can put together a small Todo application. This example uses <span className="editText">state</span> to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.</div></div>
                <div><img src="https://via.placeholder.com/728x300.png" className="cardImg" /></div>
            </div>
            <div className="cardflex"><div>
                <div className="cardTitle">A Component Using External Plugins</div>
                <div className="cardDescription">React allows you to interface with other libraries and frameworks. This example uses <b>remarkable</b>, an external Markdown library, to convert the <span className="editText">&lt;textarea&gt;</span>’s value in real time.</div></div>
                <div><img src="https://via.placeholder.com/728x300.png" className="cardImg" /></div>
            </div>
        </div>
    }
}