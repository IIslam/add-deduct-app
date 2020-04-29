import React from "react";
import { Button, Icon } from "semantic-ui-react";

export const ButtonWB = () => {
    return (
        <Button
            icon
            color="green"
            floated="right"
            className="mr-5 mt-3"
        >
            <Icon name="download" inverted />
        </Button>
    )
}