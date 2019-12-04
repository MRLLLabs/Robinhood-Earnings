import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { Chart, Header, D3Create } '../../../client/components'


describe('Chart component', () => {
  it('should render properly', () => {
    const component = renderer.create(<Chart />)
    expect(component).toMatchSnapshot();
  })

  it('should have a header and d3 create component', () => {
    const component = mount(<Chart />)
    expect(component.find(Header)).not.toBeNull();
    expect(component.find(D3Create)).not.toBeNull();
  })

  it('should be populated by data in props', () => {
    let props = {
      company: "asdf",
      symbol: "AAA",
    }
    const component = mount(<Chart graph={props} />)

    expect(component.props().graph.company).to.equal('asdf')
    expect(component.props().graph.symbol).to.equal('AAA')
  })
})
