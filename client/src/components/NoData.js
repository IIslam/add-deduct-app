import React from 'react';
import { Icon } from 'semantic-ui-react';

export const NoData = () => {
    return (
        <div className='mt-5'>
            <div className='bg-danger rounded p-5 d-flex flex-column align-items-center justify-content-center'>
                <Icon name='frown' size='massive' inverted />
                <h1 className='display-3 text-white'>Ooops...</h1>
                <h2 className='text-white'>No data has been found for this month of year</h2>
            </div>
        </div>
    )
}