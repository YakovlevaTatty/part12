import React from "react";
import CardWrapper from "../../common/Card";

const withStyles = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} />
        </CardWrapper>
    );
};

export default withStyles;
