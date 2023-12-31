import createSlice from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
        name: "auth",
        initialState,
        reducers: { //ligth and dark mode
            setMode: (state)=> {
                state.mode = state.mode === "ligth" ? "dark" : "light";
            },
            setLoin: (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
            },
            setLogout: (state) => {
                state.user=null;
                state.token=null;
            },
            setFriend: (state, action) =>{
                if(state.user){
                    state.user.friend =action.payload.friends;
                } else {
                    console.error("user friends non-existent :(")
                }
            },
            setPosts : (state, action) => {
                state.posts =action.payload.posts;
            },
            setPost: (state, action) => {
                const updatedPosts = state.posts.map((post) => {
                    if (post._id === action.payload.post_id) return action.payload.post;
                    return post;
                });
                state.posts = updatedPosts;
            }
        }
    });

    export const { setMode, setLoin, setFriend, setLogout, setPosts, setPost} = authSlice.actions;
    export default authSlice.reducer;