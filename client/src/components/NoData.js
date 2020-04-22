import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

export const NoData = ({ team }) => {
    return (
        <div className='shadow'>
            <div className='bg-danger rounded p-5 d-flex flex-column align-items-center justify-content-center'>
                <Icon name='frown' size='massive' inverted />
                <h1 className='display-3 text-white'>Ooops...</h1>
            </div>
            <div className='bg-white rounded p-5 d-flex flex-row align-items-center justify-content-center'>
                <Header size='large' className='text-dark font-weight-lighter' >It seems that no data has been submitted yet.</Header>
            </div>
        </div>
    )
}