import { Conversation } from "../models/conversation.model.js";
import { User } from "../models/user.model.js";

export const createConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });

    await newConversation.save();
    res.status(200).send("Conversation created successfully");
  } catch (error) {
    console.log(error);
    res.status(400).send("Conversation cannot be created !");
  }
};

export const getConversations = async (req, res) => {
  try {
    const userId = req.params.userId; // my userId

    const conversations = await Conversation.find({
      members: { $in: [userId] },
    });

    const conversationUserData = await conversations.map(
      async (conversation) => {
        const receiverId = conversation.members.find(
          (member) => member !== userId
        );
        console.log(receiverId);
        const user = await User.findById(receiverId);
        return {
          user: {
            // receiverId: receiverId,
            email: user.email,
            fullName: user.fullName,
          },
          conversationId: conversation._id,
        };
      }
    );

    res.status(200).json(await conversations);
  } catch (error) {
    console.log(error, "Error");
  }
};
