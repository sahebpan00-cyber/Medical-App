const mongoose=require('mongoose') ; 

async function main() 
{
   await mongoose.connect(`mongodb+srv://sahebpan00:sahebpan00@cluster0.eceoamj.mongodb.net/merntestdb`);
}

main().then(
    ()=>{ console.log("mongodb connected success..!"    )}
).catch(
    (err)=>{ console.log(err); }
) 

module.exports=mongoose;