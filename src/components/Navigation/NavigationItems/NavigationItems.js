import React, {Component} from 'react';
import NavigationItem from '../../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';

class NavigationItems extends Component {
    render() {

        const navigationItemsData = [
            {id: 1, name: "Dashboards"},
            {id: 2, name: "Users"}
        ]

        let navigationItem = navigationItemsData.map( navigationItem => (
            <NavigationItem key={navigationItem.id}>
                {navigationItem.name}
            </NavigationItem>
        ));

        return(
            <div>
                {navigationItem}
            </div>
        )
    }
}

export default NavigationItems;