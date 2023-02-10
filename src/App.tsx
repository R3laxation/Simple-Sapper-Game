import React, {useState} from 'react';
import {createField, Mine} from "./helpers/createField/createField";

enum Mask {
    Transparent,
    Fill,
    Flag,
    Question
}

const mapMaskToView: Record<Mask, React.ReactNode> = {
    [Mask.Transparent]:'',
    [Mask.Fill]:'',
    [Mask.Flag]:'',
    [Mask.Question]:''
};

function App() {

    const size = 10;
    const dimension = new Array(size).fill(null);
    const [field, setField] = useState<number[]>(() => createField(size));
    const [mask, setMask] = useState<number[]>(() => new Array(size * size).fill(Mask.Fill));


    return (
        <div>
            {dimension.map((_, y) => {
                return (
                    <div key={y} style={{display: 'flex'}}>
                        {dimension.map((_, x) => {
                            return (
                                <div key={x} style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 24,
                                    height: 24,
                                    margin: 1,
                                    backgroundColor: '#BEB'
                                }}>
                                    {
                                        mask[y * size + x] !== Mask.Transparent
                                            ? mask
                                            : field[y * size + x] === Mine
                                                ? <span>&#128163;</span>
                                                : field[y * size + x]
                                    }

                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default App;
