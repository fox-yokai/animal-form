import React, { Component } from 'react';
import Logo from '../images/zenva-academy.png';

class Intro extends Component {

    render() {

        return (
            <div>
            <img width={100} src={Logo} alt="zenva logo" />
            <p>Are you or your pet new to React? Please fill out this simple form with as much of your information as you can provide, and it will be sent directly to us in preparation for your first appointment.    
            </p>
            </div>
        )

    }
}

export default Intro;