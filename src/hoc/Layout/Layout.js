import React from 'react';
import classes from './Layout.module.css';

class Layout extends React.Component {

    render() {

        return (
            <div className={classes.layout}>
                <main className={classes.main}>
                    { this.props.children }
                </main>
            </div>
        );
    }

}

export default Layout;