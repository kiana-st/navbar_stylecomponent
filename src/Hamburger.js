import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';


const Div = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 40px;
    right: 30px;
    z-index: 20;
    display: none;
    cursor:pointer;
    @media (max-width: 768px){
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
    div{
            width: 2rem;
            height: 0.25rem;
            background: ${props => props.open ? "#fff" : "#1565df" };
            border-radius: 10px;
            transform-origin: 1px;
            transition: all 0.3s linear;
            :nth-child(1){
                transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")}
            }
            :nth-child(2){
                transform: ${(props) => (props.open ? "translate(-100%)" : "tranlate(0)")};
                opacity:${props => (props.open) ? 0 : 1 }
            }
            :nth-child(3){
                transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")}
            }
        }

`

class Hamburger extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
        }

    }
    clickHandler = () => {
        this.setState({
            open: !this.state.open,
        })
        console.log(this.state.open)
    }
    render() {

        return (
            <>
                <Div open={this.state.open} onClick={this.clickHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Div>
                <Navbar open={this.state.open}/>
            </>
        );
    }
}

export default Hamburger;