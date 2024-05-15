import React, { useState } from 'react';
import AddStudent from './AddStudent';
import RenderStudent from './RenderStudent';
export default function TableStudent() {
    
    return (
        <div>
            TableStudent:
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>MÃ Sinh Viên</th>
                        <th>Tên Sinh Viên</th>
                        <th>Ngày Sinh</th>
                        <th>Email</th>
                        <th>Trạng Thái</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    <RenderStudent></RenderStudent>
                </tbody>
            </table>
        </div>
    );
}
