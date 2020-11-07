import React from "react";
import { useParams } from "react-router";

function UserId() {
  let { userName } = useParams();
  return (
    <>
      <h1>User: {userName}</h1>
      <a href="/users">Назад</a>
    </>
  );
}

export default UserId;
