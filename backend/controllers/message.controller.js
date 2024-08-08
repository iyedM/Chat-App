import Conversation from "../models/conversation.model.js" ;
import Message from '../models/message.model.js';

export const sendMessage = async (req,res) => {
    try {
        const {message} = req.body;
        const{id: receiverId} = req.params;
        const senderId = req.user._id;
        
        let Conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        })
        if(!Conversation){
            Conversation = await Conversation.create({
                participants: [senderId, receiverId],
                })
            }
        const newMessage = new Message ({
        senderId,
        receiver,
        message
        })
        if(newMessage) {
            Conversation.messages.push(newMessage._id);
            console.log("message sent");
        }

        //socket functionality here 

        //await Conversation.save();
        //await newMessage.save();
        //this will run in parallel
        await Promise.all([Conversation.save(), newMessage.save()]);
        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in getMessage controller: ", error.message);
        res.status(500).json({error:"Internal Error Server"});
    }
};

export const getMessage = async (req, res) => {
    try {
        
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]},
        }).populate("messages"); //not reference but actual messages 

        if(!conversation) return res.status(200).json([]);

        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log("Error in getMessage controller: ", error.message);
        res.status(500).json({error:"Internal Error Server"});
    }
}