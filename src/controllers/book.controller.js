const express = require('express');

const Book = require("../models/book.model")

const upload = require("../middlewares/upload")

const router = express.Router()

router.post("/", upload.single("coverImage"),async(req,res)=>{
    try{
        const book = await Book.create({
            likes:req.body.likes,
            content:req.body.content,
            coverImage:req.file.path,
        })
        return res.status(200).send(book)
    }
    catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router