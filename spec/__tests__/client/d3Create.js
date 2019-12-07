import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { D3Create } from '../../../client/components';
const data = [
	{
		"date" : "Q1 2018",
		"estimated" : 1.2338543412859448,
		"actual" : 1.2159874223729008
	},
	{
		"date" : "Q2 2018",
		"estimated" : 0.7628355868248811,
		"actual" : 0.8891278100932136
	},
	{
		"date" : "Q3 2018",
		"estimated" : 0.6082710612614539,
		"actual" : 1.256231485885062
	},
	{
		"date" : "Q4 2018",
		"estimated" : 0.33177004366859464,
		"actual" : 0.10239494600374677
	},
	{
		"date" : "Q1 2019",
		"estimated" : 0.6740910259085577,
		"actual" : 0.2845353248552196
	},
	{
		"date" : "Q2 2019",
		"estimated" : 0.47308762981075114,
		"actual" : 0.7641997896857413
	},
	{
		"date" : "Q3 2019",
		"estimated" : 1.6850565175210557,
		"actual" : 0.4614122638085081
	},
	{
		"date" : "Q4 2019",
		"estimated" : 1.2552326465002954,
		"actual" : 1.0327321625979917
	}
]
describe('d3 create method', () => {
  it('should render properly', () => {
    let component = renderer.create(<D3Create data={[data[0]]} />)
    expect(component).toMatchSnapshot();
  })

  it('should take in data as a prop', () => {
		let component = mount(<D3Create data={data} />)
    expect(component.props().data).toBeDefined();
    expect(component.props().data.length).toBeGreaterThan(1);
  })

  xit('should render a chart with correct data', () => {
		let component = mount(<D3Create data={data} />)
  })

  xit('should be green if trending up', () => {

  })

  xit('should be red if trending down', () => {

  })

  it('should have only past 2 years of quarterly data', () => {
		let component = mount(<D3Create data={data} />)
		expect(component.props().data[0].date).toBe('Q1 2018')
		expect(component.props().data[7].date).toBe('Q4 2019')
  })

  xit('should have two keys of "Estimated" and "Actual"', () => {
		let component = mount(<D3Create data={data} />)
  })
})
