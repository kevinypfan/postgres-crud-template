const { v4: uuidv4 } = require("uuid");
const db = require("./db");

const postId = uuidv4();

db.createOne("posts", {
  post_id: postId,
  title: "Test 1",
  content: "I am handsome!",
})
  .then((result) => {
    console.log(result);
    return db.createOne("comments", {
      comment_id: uuidv4(),
      post_id: postId,
      content: "I am too!",
    });
  })
  .then((result) => {
    console.log(result);
    return db.createOne("comments", {
      comment_id: uuidv4(),
      post_id: postId,
      content: "Hey!",
    });
  })
  .then((result) => {
    console.log(result);
    return db.updateOne(
      "posts",
      { title: "Test 3", content: "beautiful" },
      { post_id: postId }
    );
  })
  .then((result) => {
    console.log(result);
    return db.findAll("posts", ["*"], { post_id: postId });
  })
  .then((result) => {
    console.log(result);
    return db.findAll("comments", ["content", "comment_id"], {
      post_id: postId,
    });
  })
  .then((result) => {
    console.log(result);
    return db.deleteOne("comments", { comment_id: result[1].comment_id });
  })
  .then((result) => {
    console.log(result);
    return db.findAll("comments", ["content", "comment_id"], {
      post_id: postId,
    });
  })
  .then((result) => {
    console.log(result);
    return db.deleteOne("posts", {
      post_id: postId,
    });
  })
  .then((result) => {
    console.log(result);
  });
