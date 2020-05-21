DROP TABLE IF EXISTS posts;
CREATE TABLE posts
(
    id_posts SERIAL NOT NULL UNIQUE,
    post_id VARCHAR(64) NOT NULL UNIQUE,
    title TEXT,
    content TEXT,
    PRIMARY KEY (id_posts)
);