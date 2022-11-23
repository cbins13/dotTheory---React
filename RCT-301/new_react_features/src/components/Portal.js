import{ Component } from 'react';
import { createPortal } from 'react-dom';

class Portal extends Component {
  render() {
    return (
      createPortal(
        this.props.children,
        document.getElementById('my-portal')
      )
    );
  }
}

export default Portal;