
const {MongoClient,ObjectID}=require('mongodb');                          //es6 destructuring
var obj =new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
   if(err){
        return console.log('Unable to connect to mongodb server');
   }
   console.log('connect to mongodb server');
//    db.collection('Todos').find(
//        {
//            _id:new ObjectID('5abc86483f2c52c9359fe844')
//        }
//    ).toArray().then((docs)=>{
//        console.log('Todos');
//        console.log(JSON.stringify(docs,undefined,2));
//    },(err)=>{
//         console.log('error in find');
//    });

// db.collection('Todos').find().count().then((count)=>{
//     console.log(`Todos count:${count}`);
    
// },(err)=>{
//      console.log('error in find');
// });
db.collection('Users').find({name:'Saurav Prasad'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
})
   db.close();
});