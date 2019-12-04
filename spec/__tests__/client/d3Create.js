import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { D3Create } from '../../../client/components';

describe('d3 create method', () => {
  it('should render properly', () => {
    const component = renderer.create(<D3Create />)
    expect(component).toMatchSnapshot();
  })

  it('should take in data as a prop', () => {
    // TODO finish this data mocking
    // let data = [
    //   {"Q1 2018":1},
    //   {"Q2 2018":2},
    //   {"Q3 2018":3},
    //   {"Q4 2018":4},
    //   {"Q1 2019":5},
    //   {"Q2 2019":6},
    //   {"Q3 2019":7},
    //   {"Q4 2019":8}
    // ]
    const component = mount(<D3Create data={data} />)
    expect(component.props().data).toBeDefined();
    expect(component.props().data.data.length).toBeGreaterThan(1);
  })

  it('should render a chart with correct data', () => {
    // TODO not entirely sure what this will look like since the D3 isn't built yet.
  })

  it('should be green if trending up', () => {

  })

  it('should be red if trending down', () => {

  })

  it('should have only past 2 years of quarterly data', () => {

  })

  it('should have two keys of "Estimated" and "Actual"', () => {

  })
})
