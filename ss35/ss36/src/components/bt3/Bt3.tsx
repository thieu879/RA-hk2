import React, { useState, useEffect, useRef } from 'react';

export default function Bt3() {
    const [selectedButton, setSelectedButton] = useState('Trang chủ');
    const focusButton = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (focusButton.current && selectedButton === 'Trang chủ') {
            focusButton.current.focus();
        }
    }, [selectedButton]);

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    return (
        <div>
            Bt3:
            <br />
            <button
                ref={focusButton}
                style={{ backgroundColor: selectedButton === 'Trang chủ' ? 'gray' : 'white' }}
                onClick={() => handleButtonClick('Trang chủ')}
            >
                Trang chủ
            </button>
            <button
                style={{ backgroundColor: selectedButton === 'Sản phẩm' ? 'gray' : 'white' }}
                onClick={() => handleButtonClick('Sản phẩm')}
            >
                Sản phẩm
            </button>
            <button
                style={{ backgroundColor: selectedButton === 'Giới thiệu' ? 'gray' : 'white' }}
                onClick={() => handleButtonClick('Giới thiệu')}
            >
                Giới thiệu
            </button>
            <button
                style={{ backgroundColor: selectedButton === 'Liên hệ' ? 'gray' : 'white' }}
                onClick={() => handleButtonClick('Liên hệ')}
            >
                Liên hệ
            </button>
        </div>
    );
}
