import React from "react";
import ReactDOM from "react-dom";
import Counter from './counter';

const Index = () => {
    return (
        <div>
            <Counter className=""> </Counter>
        </div>
    )
};

ReactDOM.render(<Index />, document.getElementById("index"));