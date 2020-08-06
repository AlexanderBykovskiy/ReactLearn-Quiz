import React from 'react';
import classes from './Drawer.module.css';
import { NavLink } from 'react-router-dom';

const links=[
    {
        to: '/',
        label: 'Home',
        exact: true
    },
    {
        to: '/auth',
        label: 'Auth',
        exact: false
    },
    {
        to: '/quiz-creator',
        label: 'Create quiz',
        exact: false
    },
]

class Drawer extends React.Component {

    handleClick = () => {
        this.props.handleToggleClick();
    }

    renderLinks() {
        return(
            links.map((item, index) => {
                return(
                    <li key={index}>
                        <NavLink
                            to={item.to}
                            exact={item.exact}
                            activeClassName={classes.active}
                            onClick={this.handleClick}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                );
            })
        )
    }

    render() {

        const styles=[
            classes.drawer
        ]

        if (!this.props.isOpen) {
            styles.push(classes.close);
        }

        return (
            <nav
                className={styles.join(' ')}
            >
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }

}

export default Drawer;