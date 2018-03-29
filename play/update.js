const {MongoClient,ObjectID}=require('mongodb');                          //es6 destructuring

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
   if(err){
        return console.log('Unable to connect to mongodb server');
   }
   console.log('connect to mongodb server');
//    db.collection('Todos').findOneAndUpdate({
//        _id:new ObjectID("5abb7b7a5f8a261a784dca4c")
//    },{
//        $set:{
//            completed:true
//        }
//    },{
//        returnOriginal:false
//    }).then((result)=>{
//         console.log(result);
//    });
db.collection('Todos').findOneAndUpdate({
    _id:new ObjectID("5abb7b7a5f8a261a784dca4c")
},{
    $set:{
        completed:true
    },
    $inc:{
        age:1
    }
},{
    returnOriginal:false
}).then((result)=>{
     console.log(result);
});
    db.close();
});