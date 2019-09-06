import React, { Component } from 'react';
import Dialog from 'react-dialog';


class win extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div>
                <div>
                <input type="text" placeholder='Enter UserName' ref="name" />
                <input type="text" placeholder='Enter UserName' ref="name" />

                <button 
                className='searchButton' 
                onClick={this.getUser}> check it out
                 </button>
                </div>


                
            </div>
         );
    }
}
 
export default win;