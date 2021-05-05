import express from 'express';
import Todo from "../models/todoSchema.js"

const router = express.Router()

router.get("/",(req,res)=>{
    res.json({message:"Hello from the router"})
})

router.post("/create",async(req,res)=>{
    try{
        const {title,desc} = req.body;
        const todo  = await new Todo({
            title,
            desc
        })

        const todoSave = await todo.save()
        if(todoSave){
            res.status(200).json({message:"Todo saved"})
        }else{
            res.status(400).json({error:"Todo not saved"})
        }
    }catch(e){
        console.log(e);
    }
})


router.get('/getTodo',async(req,res)=>{
    try{
        const todo = await Todo.find({})
        res.status(200).send(todo)

    }catch(e){
        console.log(e)
    }
})

router.get("/getId/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const todo = await Todo.findById({_id});
        res.status(200).send(todo);

    }catch(e){
        console.log(e)
    }
})


router.delete("/delete/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const todo = await Todo.findByIdAndDelete(_id);
        res.status(200).send("deleted");
        
    }catch(e){
        console.log(e)
    }
})

export default router;