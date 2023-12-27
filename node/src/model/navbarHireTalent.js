const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NavbarHireTalentSchema = new Schema({
  
    mainCategory: {
    type: String,
    required: false,
  },
  categories: {
    type: [{
        category: {
            type: String,
        },
        fields : {
            type: [{
                field: {
                    type: String,
                }
            }],
        }
   }],
    required: false,
  },
});

module.exports = mongoose.model('navbar-hire-talent', NavbarHireTalentSchema);
