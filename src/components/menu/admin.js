import React, { Component } from 'react';

/**
 * @namespace components\menu;
 * @class Admin
 *
 * @description Admin menu panel
 * */

class Admin extends Component {
  render() {
    console.log(this.props.routes);
    // console.log(this.props.event);
    return <div>Admin Menu</div>;
  }
}

export default Admin;
