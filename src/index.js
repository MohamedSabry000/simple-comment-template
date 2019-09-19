// Import React and React Dom Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React Component
const App = function(){
    return (
    <div>Hi There!</div>
    );
}

//Take React component and Show it into Screen
ReactDOM.render(
    <App />, document.querySelector('#root')
)