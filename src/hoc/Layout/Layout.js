import React from 'react';
import classes from './Layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';

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