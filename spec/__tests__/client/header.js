import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Header } from '../../../client/components'

describe('header component', () => {
  it('should render properly', () => {
    const component = renderer.create(<Header />)
    expect(component).toMatchSnapshot();
  })
})
