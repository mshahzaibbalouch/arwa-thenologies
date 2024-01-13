const mongoose = require("mongoose");

const portfolioTitleSchema = new mongoose.Schema({
    
  title : {
    type: String,
    required: true,
  },
  description : {
    type: String,
    required: true,
  }
});

const PortfolioTitle = mongoose.model("portfolioTitle", portfolioTitleSchema);

module.exports = PortfolioTitle;
