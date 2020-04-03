import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";

const LIMITS = [
    { key: '0', value: 10, text: '10' },
    { key: '1', value: 25, text: '25' },
    { key: '2', value: 50, text: '50' },
    { key: '3', value: 100, text: '100' }
]

export class PageSize extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultVal: 10
        }
    }

    changeHandler = (e, data) => {
        this.setState({ defaultVal: data.value })
        this.props.onChangeHandler(data.value)
    }

    render() {
        let { defaultVal } = this.state;
        return (
            <div className="pl-3">
                <span className='h5 font-weight-light'>Records per page: </span>
                <Dropdown
                    inline
                    options={LIMITS}
                    defaultValue={defaultVal}
                    onChange={this.changeHandler}
                    className='h5 font-weight-bolder'
                />
            </div>
        )
    }
}

PageSize.propTypes = {
    onChangeHandler: PropTypes.func.isRequired
}