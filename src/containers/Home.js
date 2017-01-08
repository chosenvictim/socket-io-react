import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import InventoryItem from '../components/InventoryItem';

const socket = io(`http://localhost:3000`);

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        const self = this;
        socket.on('connect', function() {
            console.log("Socket Connected to server");
        });

        socket.on('newData', function(data) {
            self.props.dispatch({
                type: "SAVE_VENDOR_DATA",
                data
            });
        });

        socket.on('disconnect', function(err) {
            console.log("Disconnected !! ", err);
        });

        socket.on('error', function(err) {
            console.log("Error in connection !! ", err);
        });
    }

    render() {
        return (
            <div className="main-container">
                <h2>Stationary Inventory List</h2>
                {
                    this.props.vendorData.data.length > 0 ?
                    <ul className="data-list horizontal-flex fs">
                        {this.props.vendorData.data.map((item, idx) => <InventoryItem item={item} idx={idx} />)}
                    </ul>
                    : <p>Inventory is Empty</p>
                }
                <div className="signature">
                    <p>Made by:- Shek</p>
                    <p>Check my <a href="https://github.com/shek8034">Github</a></p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        vendorData: state.vendorData
    }
}

export default connect(mapStateToProps)(Home);
