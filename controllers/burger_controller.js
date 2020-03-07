const connection = require ("../config/connection");

//get all burgers

const getBurger = () => {
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
  return new Promise((resolve, reject)=>{
    connection.query("UPDATE burgers SET ? WHERE id = ?",[burgerObj, burgerId],(err,burgerdata)=>{
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
const deleteBurger =  burgerId =>{
  return new Promise((resolve, reject)=>{
    connection.query("DELETE burgers SET ? WHERE id = ?",[burgerId],(err,burgerdata)=>{
      if (err){
        console.log(err);
        return reject(err);
      }
      else if (burgerdata.affectedRows===0){
        return resolve({message:"Could not find a burger with that id!"});
      };
      resolve({message:"Burger was successfully deleted!"});
    });
  });
};

module.exports = { getBurger, createBurger, updateBurger, deleteBurger };