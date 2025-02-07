import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ menuItem }) => {
    return (
    
        <div class = "container">
            <div className = "item">
                <div className = "col-6">
                    <img src = {`/images/${menuItem.imageName}`} alt = {menuItem.description}/>
                </div>
                <div className = "col-6">
                    <div className = "title"> {menuItem.title}  </div>
                    <div className = "description"> {menuItem.description} </div>
                    <div id = "inline">
                        <div className = "price"> {menuItem.price} </div>
                        <div className = "add"> Add </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
