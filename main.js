import express from 'express'
const app=express()
const PORT=6969

app.get('/',(req,res)=>{
    res.json({msg:"Hello Students!"})
})

// CRUD Functionallity of movies

// C - For Creating movie

app.post('/movies',()=>{

})

// R-For Reading movie
app.get('/movies',()=>{

})

// U-For Updating movie
app.put('/movie:id',()=>{

})

// D-For Deleting movie
app.delete('/movie:id',()=>{
    
})

app.listen(PORT, ()=>{
    console.log(`The Server is running at http://localhost:${PORT}`);
})

// DRY Principle don't use same value more than one time instent create var
