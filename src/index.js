import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails'

const App = () => {
    return (
       <div className="ui container comments">
           <CommentDetails author="Sam"/>
           <CommentDetails author="Alex"/>
           <CommentDetails author="Jane"/>
       </div> 
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));