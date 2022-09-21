const TodoModel = require("../model/TodoScheme.js");


module.exports = {
    index : async (req,res)=> {
        try {
            const List = await TodoModel.find();
            res.json(List).status(200);
        } catch (error) {
            res.json(error).status(404);            
        }
    },
    AddList : async (req,res)=> {
        try {
            const {list} = req.body;
            const AddList = await TodoModel({list});
            AddList.save();
            res.json({"Message" : "List Ditambahkan"}); 
        } catch (error) {
            res.json({"Message" : "Failed"});
        }
    },
    GetListbyId :  async (req,res)=> {
        const {id} = req.params;
        try {
            const List = await TodoModel.findOne({_id :id});
            res.json(List);
        } catch (error) {
            res.json(error)
        }
    },
    EditList : async (req,res)=> {
        const {id} = req.params;
        const {list,Progress} = req.body
        try {
            const List = await TodoModel.findOneAndUpdate({_id :id},{list:list,Progress : Progress});
            res.json({"message" : "Update list Success",list});
        } catch (error) {
            res.json(error)
        }
    },
    DeleteList : async (req,res) => {
        const {id} = req.params;
        try {
            await TodoModel.findOneAndDelete({_id:id});
            res.json("Success Delete List");
        } catch (error) {
            res.json(error);
        }
    }
}