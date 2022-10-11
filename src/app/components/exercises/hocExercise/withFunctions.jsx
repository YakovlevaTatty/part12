import React, { useState } from "react";
import SimpleComponent from "./SimpleComponent";
import withStyles from "./withStyles";

const HOCWithFunctions = () => {
    const ComponentWithStyles = withStyles(SimpleComponent);
    const [isAuth, setAuth] = useState(false);
    return (
        <div>
            <ComponentWithStyles
                isAuth={isAuth}
                onLogin={() => {
                    setAuth(true);
                }}
                onLogOut={() => setAuth(false)}
            />
        </div>
    );
};

export default HOCWithFunctions;
