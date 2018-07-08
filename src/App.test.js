import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import rmwcTestPolyfill from 'rmwc/Base/testPolyfill';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });
rmwcTestPolyfill();
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
