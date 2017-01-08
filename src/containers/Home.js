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
        socket.on('event', function(data) {
            console.log("Event from server: ", data);
        });
        socket.on('disconnect', function(){});
    }

    render() {
        return (
            <div>
                <h2>Socket.io React Client</h2>
                <div className="data-list">
                {
                    this.props.vendorData.data.map((item, idx) => <InventoryItem item={item} idx={idx} /> )
                }
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
