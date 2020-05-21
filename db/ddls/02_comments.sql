DROP TABLE IF EXISTS comments;
CREATE TABLE comments
(
    id_comments SERIAL NOT NULL UNIQUE,
    comment_id VARCHAR(64) NOT NULL UNIQUE,
    post_id VARCHAR(64) NOT NULL REFERENCES posts(post_id) ON DELETE CASCADE,
    content TEXT,
    PRIMARY KEY (id_comments)
);