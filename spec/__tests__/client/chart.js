import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'whatwg-fetch';

import { Chart, Header, D3Create } from '../../../client/components'

const mockResponse = (status, statusText, response) => {
  return new global.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

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
describe('Chart component', () => {

  it('should render properly', (done) => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockResponse(200, null, data));
    })
    const component = renderer.create(<Chart />)
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/getData?id=1', {"type": "GET"});
    expect(component).toMatchSnapshot();
    done();
  })

  it('should have a header and d3 create component', () => {
    const component = mount(<Chart />)
    expect(component.find(Header)).not.toBeNull();
    expect(component.find(D3Create)).not.toBeNull();
  })

  xit('should be populated by data in props', async (done) => {
    // come back to this. time boxing.
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockResponse(200, null, data));
    })

    const component = await mount(<Chart />)
    expect(component.state().data.length).toBe(8)
    done();
  })
})
