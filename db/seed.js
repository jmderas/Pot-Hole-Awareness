
const { Reports } = require("../models/Reports");
Reports.remove({}).then(function(){
      Reports.insertMany([{
        content: "11th & I Pot-hole"
      }]).then(item => {
          console.log(item)
          process.exit()
      })
    });

    