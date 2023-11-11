import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required : true,
        },
        firstName:{
            type: String,
            require: true,
        },
        lastName: {
            type: String,
            require: true,
        },
        location: String,
        description: String,
        picturePath: String,
        userPichurePath: String,
        likes: {
            type: Map,
            of:Boolean,
        },
        comments: {
            type:Array,
            default:[],
        }
    },{ timestamps: true}
);

const Post =mongoose.model("post", postSchema);
 export default Post;
