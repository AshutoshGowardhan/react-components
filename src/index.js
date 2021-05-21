import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails'
import faker from 'faker';

const App = () => {
    return (
       <div className="ui container comments">
           <CommentDetails author="Sam" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()}/>
           <CommentDetails author="Alex" timeAgo="Monday at 5:25AM" avatar={faker.image.avatar()}/>
           <CommentDetails author="Jane" timeAgo="Yesterday at 8:45PM" avatar={faker.image.avatar()}/>
       </div> 
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));