import express from 'express'
const app=express()
const PORT=6969

app.get('/',(req,res)=>{
    res.json({msg:"Hello Students!"})
})

app.listen(PORT, ()=>{
    console.log(`The Server is running at http://localhost:${PORT}`);
})

// DRY Principle don't use same value more than one time instent create var
