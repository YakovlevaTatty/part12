import React, { useState, useEffect } from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
    const [data] = useState({});

    useEffect(() => {
        console.log(data);
    }, [data]);

    return React.Children.map(children, (child) => {
        console.log("child", child);
        const config = React.Children.count(children);
        // {
        //     ...child.props
        // };

        return React.cloneElement(child, config);
    });
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <FormComponent>
                <Component />
                <Component />
                <Component />
            </FormComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
