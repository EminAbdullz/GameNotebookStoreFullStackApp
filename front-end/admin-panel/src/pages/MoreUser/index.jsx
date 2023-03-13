import React from "react";
import Main from "../../components/layout/main";
import useScreen from "../../hooks/useScreen";

function MoreUser() {
  const { useScreenUsers, useScreenProducts } = useScreen();

  return (
    <div>
      <Main>{useScreenUsers()}</Main>
    </div>
  );
}

export default MoreUser;
