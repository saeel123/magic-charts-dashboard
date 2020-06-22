import React, {Component} from 'react';

import styles from './Layout.module.css';
import Aux from '../Aux/Aux';
import Header from '../../components/Navigation/Header/Header';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';


class Layout extends Component {
    render() {
        return(
            <Aux>
                <Header/>
                <Sidebar/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;