import React from 'react'

import { Option } from 'components/Option'

export const Select = ({endpoints, setCurrentEndpoint}) => {
    return (
        <label className='select-label'>
            <h2>{'Select an endpoint'}</h2>
            <select 
                defaultValue={endpoints[0]} 
                onChange={(event) => setCurrentEndpoint(event.target.value)}>
                {endpoints.map((a) =>
                    <Option
                        key={a}
                        value = {a}
                    />
                )}
            </select>
        </label>
    )
}
