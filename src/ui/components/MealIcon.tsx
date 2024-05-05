import React from 'react'

const MealIcon = (props: any) => {
    const foodType = props?.foodType;

    const typeToColor: any = {
        'veg': 'green',
        'non-veg': 'red',
        'disabled': 'gray'
    }

    return (
        <div style={{
            width: '16px',
            height: '16px',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            borderColor: typeToColor[foodType],
            borderWidth: '1px',
            borderStyle: 'solid'
        }}>
            <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: typeToColor[foodType],
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%'
            }}></div>
        </div>

    )
}

export default MealIcon