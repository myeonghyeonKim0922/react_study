import { useParams } from "react-router-dom";
const data = {
  haseo: {
    name: "김하서",
    description: "강사",
  },
  gildong: {
    name: "홍길동",
    description: "고전소설 주인공",
  },
};

import React from "react";

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.username}</h2>
          <h2>{profile.description}</h2>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
