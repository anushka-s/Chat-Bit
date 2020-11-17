import React from 'react';
import io from 'socket.io-client';

const socketUrl = "http://192.168.1.7:3001"
//stateful component
export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            socket:null,
            connected: false,
        };
    }
    
    componentWillMount() {
        this.initSocket()
    }

    const initSocket = () =>{
        const socket = io(socketUrl)
        socket.on('connect', ()=>{
           // console.log("Connected");
        })
        this.setState=({socket})
        this.setState=({connected: true})    
    }
    
    render() {
        const { title } =this.props
        return (
            <div className="container"> 
                {title}
            </div>
        );
    }
}