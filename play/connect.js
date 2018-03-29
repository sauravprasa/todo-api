
const {MongoClient,ObjectID}=require('mongodb');                          //es6 destructuring
 var obj =new ObjectID();
 console.log(obj);
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
    if(err){
         return console.log('Unable to connect to mongodb server');
    }
    console.log('connect to mongodb server');

    // db.collection('Todos').insertOne({
    //     text:'some this is that ',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Ahhh! error');
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    // db.collection('Users').insertOne({
        
    //     name:'Saurav Prasad',
    //     age:21,
    //     location:'jalandhar'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Ahhh! error');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    db.close();
});