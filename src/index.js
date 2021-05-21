import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails'
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
       <div className="ui container comments">
           
           
           <ApprovalCard>
           <CommentDetails author="Sam" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
           <CommentDetails author="Alex" timeAgo="Monday at 5:25AM" avatar={faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
           <CommentDetails author="Jane" timeAgo="Yesterday at 8:45PM" avatar={faker.image.avatar()}/>
           </ApprovalCard>

       </div> 
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));