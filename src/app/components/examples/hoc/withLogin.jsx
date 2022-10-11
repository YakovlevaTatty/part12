import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";
const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    console.log("Component", <Component />);
    return (
        <>
            {isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}
        </>
    );
};

export default withLogin;
