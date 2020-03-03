const connection = require ("../config/connectio");

//get all burgers

const getBurgers = () =>{
  return new Promise((resolve,reject)=>{
  connection.query("SELECT * FROM burgers",(err,burgerdata)=>{
    if(err){
      console.log(err);

      // promise .catch
      return reject(err);
        }
       //promise .then
        resolve(burgerdata);
  });
  });
};

// create new burger

const createBurger = burgerObj =>{
  return new Promise ((resolve, reject)=>{
    connection.query("INSERT INTO burger SET ?", burgerObj,(err,burgerdata)=>{
      if (err){
        console.log(err);
        return reject(err);
      }
      resolve(burgerdata);
    });
  });
};

//update burger

const updateBurger = (burgerObj, burgerId)=>{
  return new Promise((resolbe, reject)=>{
    connection.query("UPDATE burgers SET ?WHERE id = ?",[burgerObj,burgerId],(err,burgerdata)=>{
      if (err){
        console.log(err);
        return reject(err);
      }
      else if (burgerdata.affectedRows===0){
        return resolve({message:"Could not find a burger with that id!"});
      };
      resolve({message:"Burger was successfully updated!"});
    });
  });
};