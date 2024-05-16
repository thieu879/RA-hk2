import React, { useState } from 'react';

export default function Bt10(): JSX.Element {
    const [checkBox, setCheckBox] = useState<string[]>([]);

    const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const checked = e.target.checked;

        if (checked) {
            setCheckBox([...checkBox, value]);
        } else {
            setCheckBox(checkBox.filter(item => item !== value));
        }
    };

    return (
        <div>
            Bt10:
            <br />
            <p>Sở thích: [{checkBox.join(', ')}]</p>
            <label>
                <input
                    onChange={handleCheckBoxChange}
                    value="Đi chơi"
                    type="checkbox"
                    checked={checkBox.includes("Đi chơi")}
                />
                Đi chơi
            </label>
            <br />
            <label>
                <input
                    onChange={handleCheckBoxChange}
                    value="Code"
                    type="checkbox"
                    checked={checkBox.includes("Code")}
                />
                Code
            </label>
            <br />
            <label>
                <input
                    onChange={handleCheckBoxChange}
                    value="Đi bơi"
                    type="checkbox"
                    checked={checkBox.includes("Đi bơi")}
                />
                Đi bơi
            </label>
        </div>
    );
}
