const db = require('./index.js');
const Graph = require('./graph.js');

const companyNames = require('./templates/companyNames');
const dataCreate = require('./templates/dataCreate');

const createObjects = () => {
  let currentStockPrice = Math.floor(Math.random() * 100);
  let graphData  = [];

  // integer that is the current price
  console.log("creating new collections...")
  Object.entries(companyNames).forEach( (entry, idx) => {
    let newGraph = {
      company: entry[0],
      title: entry[1],
      scale: "",
      data: dataCreate(currentStockPrice)
    }

    console.log(`Companies: ${idx + 1}/${Object.keys(companyNames).length}`)
    graphData.push(newGraph)
  })

  return graphData
}

const dbSetup = () => {
  // deletes old data if exists
  Graph.deleteMany({}, (err) => {
    if (err) {
      throw err
    }

    let newData = createObjects();
    Graph.create(newData, (err, res) => {
      if (err) {
        throw err
      }
      db.then((res) => {
        console.log("created db")
        res.disconnect()
      })
    })
  })
}


dbSetup();
