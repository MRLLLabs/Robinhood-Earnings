import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Header } '../../../client/components'

describe('header component', () => {
  it('should render properly', () => {
    const component = renderer.create(<Chart />)
    expect(component).toMatchSnapshot();
  })

  it('should receive header text from props', () => {
    const component = shallow(<Chart />);

    expect(component.find('.head').html()).tobeDefined();
  })
})
