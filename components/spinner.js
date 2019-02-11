import React from "react";
import { Spinner } from "reactstrap";

export default class Loader extends React.Component {
    render() {
        if (this.props.loading)
            return (
                <div>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="success" />
                    <Spinner type="grow" color="danger" />
                    <Spinner type="grow" color="warning" />
                    <Spinner type="grow" color="info" />
                </div>
            );
        else return <div />;
    }
}
