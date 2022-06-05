import React from "react";
import classNames from 'classnames';

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    };

    onChange = activeValue => () => this.setState(({active}) => ({active: activeValue}));

    onChangeLeft = this.onChange('left');

    onChangeRight = this.onChange('right');

    render() {
        const btnLeft = classNames(
            'btn',
            'btn-secondary',
            {
                'left': true,
                'active': this.state.active === 'left'
            }
        );

        const btnRight = classNames(
            'btn',
            'btn-secondary',
            {
                'right': true,
                'active': this.state.active === 'right'
            }
        );

        return (
            <div className='btn-group mt-5 m-3' role='group'>
                <button type='button' className={btnLeft}
                        onClick={this.onChangeLeft}>Left
                </button>
                <button type='button' className={btnRight}
                        onClick={this.onChangeRight}>Right
                </button>
            </div>
        )
    }
}

export default BtnGroup;