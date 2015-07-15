import React from 'react';
import MenuItem from './MenuItem.js';
import MenuStore from '../stores/MenuStore.js';
import MenuActions from '../actions/MenuActions.js';
import getSlugFromURL from '../utils/getSlugFromURL.js';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getStoreState();
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  componentDidMount() {
    MenuStore.on('change', this.onStoreChange);
    MenuActions.fetchByID(2);
  }

  onStoreChange() {
    this.setState(this.getStoreState());
  }

  getStoreState() {
    return {
      menu: MenuStore.getMenuByID(2),
    };
  }

  render() {
    if (!this.state.menu) {
      return false;
    }

    const styles = {
      base: {
        margin: 0,
        float: 'right',
        listStyleType: 'none',
      },
    };

    const items = this.state.menu.get('items').map((item) => {
      const URL = item.get('url');
      const slug = getSlugFromURL(URL);
      return (
        <MenuItem
          key={slug}
          slug={slug}
          title={item.get('title')}
          description={item.getIn(['meta', 'description'])}
          />
      );
    }).toArray();

    return (
      <ul style={styles.base}>
        {items}
      </ul>
    );
  }

}

Menu.propTypes = {
  pages: React.PropTypes.object,
};

export default Menu;
