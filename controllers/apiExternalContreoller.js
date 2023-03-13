const axios = require ("axios");

const getExternalComments = async(req,res)=>{
    const comments = await axios.get('https://jsonplaceholder.typicode.com/comments')
    res.status(200).json({
        comments: comments.data,
        msg:"ok"
    })
};
module.exports = {getExternalComments};


