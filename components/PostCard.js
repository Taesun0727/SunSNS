import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Card, Popover, Button, Avatar, List, Comment } from 'antd';
import { EllipsisOutlined, MessageOutlined, HeartOutlined, RetweetOutlined, HeartTwoTone, } from '@ant-design/icons';
import PostImages from './PostImages';
import CommentForm from './CommentForm';

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id)
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpend] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpend((prev) => !prev);
  }, []);
  
  return (
    <div style={{ marginBottom: 10 }}>
      <Card 
      cover={post.Images[0] && <PostImages images={post.Images}/>} 
      actions={[
        <RetweetOutlined key="retweet"/>,
        liked
          ? <HeartTwoTone twoToneColor="#eb6f96" key="headr" onClick={onToggleLike}/>
          : <HeartOutlined key="heart" onClick={onToggleLike}/>,
        <MessageOutlined key="comment" onClick={onToggleComment}/>,
        <Popover key="more" content={(
          <Button.Group>
            {id && post.User.id === id
            ? (
              <>
                <Button>수정</Button>
                <Button type="danger">삭제</Button>
              </>
            ) : <Button>신고</Button>}
          </Button.Group>
        )}>
          <EllipsisOutlined/>
        </Popover>]}>

        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;