import React, { useState } from 'react';

export default function Bt9() {
    const [radio, setRadio] = useState<string>("");

    const handleRadioChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.target.value);
    };

    return (
        <div>
            Bt9:
            <br />
            <p>Giới tính: {radio}</p>
            <input 
                value="nam" 
                type="radio" 
                checked={radio === "nam"}
                onChange={handleRadioChange} 
            />
            <label htmlFor="nam">Nam</label>
            <br />
            <input 
                value="nữ" 
                type="radio" 
                checked={radio === "nữ"}
                onChange={handleRadioChange} 
            />
            <label htmlFor="nữ">Nữ</label>
            <br />
            <input
                value="khác"
                type="radio"
                checked={radio == "khác"}
                onChange={handleRadioChange}
            />
            <label htmlFor="khác">Khác</label>
        </div>
    );
}
