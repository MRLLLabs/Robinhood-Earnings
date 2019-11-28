let graphs = new Schema({
  company: String,
  title: String,
  data: [
    {
      date: Date,
      estimated: Float,
      actual: Float,
    }
  ],
  scale: String
})


let news = new News({
  company: String,
  date: Date,
  source: String,
  title: String,
  thumbnail: String,
  body: String,
  views: Number
})
