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
        //await Conversation.save();
        //await newMessage.save();
        res.status(201).json(newMessage);

    } catch (error) {
        res.status(500).json({error:"Internal Error Server"});
    }
};
