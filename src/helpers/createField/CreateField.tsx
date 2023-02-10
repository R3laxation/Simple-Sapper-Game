import React from 'react';

export const CreateField = (size: number): number[] => {

    const field: number[] = new Array(size * size).fill(0);

    return  field;
};

