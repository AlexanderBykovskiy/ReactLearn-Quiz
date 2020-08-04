import React from 'react';
import classes from './Layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

class Layout extends React.Component {

    state = {
        'menu': false
    }

    handleToggleClick = () => {
        this.setState({
            'menu': !this.state.menu
        });
    }

    render() {

        return (
            <div className={classes.layout}>
                <Backdrop
                    isOpen={this.state.menu}
                    handleToggleClick={this.handleToggleClick}
                />
                <Drawer isOpen={this.state.menu}/>
                <MenuToggle
                    handleToggleClick={this.handleToggleClick}
                    isOpen={this.state.menu}
                />
                <main className={classes.main}>
                    {this.props.children}
                </main>
            </div>
        );
    }

}

export default Layout;