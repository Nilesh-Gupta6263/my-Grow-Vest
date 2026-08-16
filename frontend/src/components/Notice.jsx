import React from 'react';
export default function Notice({ message, type = 'error' }) { return message ? <p className={`notice ${type}`} role="alert">{message}</p> : null; }
