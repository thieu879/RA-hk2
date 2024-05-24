import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
export default function Bt5() {
    const [show, setShow] = useState(true);
  return (
    <div>
        Bt5:
        <br />
        <Alert show={show} variant="success">
            <p>Thêm Tài Khoản Thành Công</p>
        </Alert>
        <Alert show={show} variant="danger">
            <p>Thêm Tài Khoản Thất Bại</p>
        </Alert>
        <Alert show={show} variant="warning">
            <p>Tên Không Được để trống</p>
        </Alert>

    </div>
  )
}
