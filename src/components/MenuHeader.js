import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const MenuHeader = ({}) => {
    return (
    
        <div header> 
            <div className = "main_title" >
                <img src = "./cs378-p2/images/cherry.png" id = "cherry" alt = "A cherry blossom overlayed with the word 'Cherry's." />
            </div>
            <div className = "desc" > Japanese local favorites! </div>
            <div className = "catchphrase" > Enjoy everything from sweet desserts to savory entrees! </div>
        </div>

    );
};

export default MenuHeader;
