import React, { useCallback } from 'react';
import { Card, Button, Avatar } from 'antd';
import { useDispatch } from 'react-redux';
import { logOutAction } from '../reducers/user'

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logOutAction())
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">짹쨱<br />0</div>,
        <div key="followings">팔로잉<br />0</div>,
        <div key="followar">팔로워<br />0</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>sun</Avatar>}
        title="Sun"
      />
      <Button onClick={ onLogOut }>로그아웃</Button>
    </Card>
  )
}

export default UserProfile;