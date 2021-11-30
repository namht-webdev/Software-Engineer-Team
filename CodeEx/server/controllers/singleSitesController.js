
class SingleSite{
    index(req, res, next){
        return res.json({message:"Hello team i am Nam!"});
    }
}

module.exports = new SingleSite;