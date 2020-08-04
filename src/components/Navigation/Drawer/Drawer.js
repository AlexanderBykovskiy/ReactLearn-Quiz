import React from 'react';
import classes from './Drawer.module.css';

const links=[
    1, 2, 3
]

class Drawer extends React.Component {

    renderLinks() {
        return(
            links.map((link, index) => {
                return(
                    <li key={index}>
                        <a>Link {link}</a>
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