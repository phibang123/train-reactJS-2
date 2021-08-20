import { ADD_COMMENT } from "../typed/FakeBookType";

export const addCommentAction = (userComment) => ({
    type: ADD_COMMENT,
    userComment: {...userComment,img: `https://i.pravatar.cc/50?u=${userComment.name}`}
})
