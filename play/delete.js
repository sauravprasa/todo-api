
const {MongoClient,ObjectID}=require('mongodb');                          //es6 destructuring
var obj =new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
   if(err){
        return console.log('Unable to connect to mongodb server');
   }
   console.log('connect to mongodb server');
   //deleteMany
//    db.collection('Todos').deleteMany({text:'ankit'}).then((result)=>{
//     console.log(result);
//    });
   //deleteOne
//   
// db.collection('Todos').findOneAndDelete({completed:'false'}).then((result)=>{
//     console.log(result);
//    });

   db.collection('Users').findOneAndDelete({_id:new ObjectID("5abc7e0acfded911ecc14631")}).then((result)=>{
       console.log(JSON.stringify(result,undefined,2));
   })
   db.close();
});