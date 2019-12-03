const mongoose = require('mongoose');
const path = require('path');
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

beforeEach( (done) => {

  const clearDb = () => {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(() => {});
    }

    return done();
  }

  if (mongoose.connection.readyState === 0) {
    mongoose.connect(`mongodb://localhost:27017/${process.env.TEST_SUITE}`, (err) => {
      if (err) {
        throw err
      }
      return clearDb();
    })
  } else {
    return clearDb();
  }
});

afterEach((done) => {
  return done();
});

afterAll( (done) => {
  mongoose.disconnect();
  return done();
});
