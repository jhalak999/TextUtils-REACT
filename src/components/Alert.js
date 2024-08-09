import React from 'react';

export default function Alert(props) {
    // Function to capitalize the first letter of a word
    const capitalize = (word) => {
        if (!word) return '';
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        <div>
            {props.alert && props.alert.type && (
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            )}
        </div>
    );
}

