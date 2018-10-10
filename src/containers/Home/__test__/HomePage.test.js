import React from 'react';

import { shallow, mount, render } from 'enzyme';
import HomePage from '../HomePage';

describe('<Home />', () => {
    it('renders three <HomePage /> components', () => {
        const wrapper = shallow(<HomePage />);
      });
});