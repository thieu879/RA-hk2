import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
export default function Bt10() {
  return (
    <div>
        Bt10:
        <br />
        <Table responsive="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ Và Tên</th>
            <th>Giới Tính</th>
            <th>Ngày Sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>Nam</td>
            <td>01/01/1990</td>
            <td>nguyenvana@gmail.com</td>
            <td>Hà Nội</td>
            <td>
                <Button variant="warning">Sửa</Button>{' '}
                <Button variant="danger">Xoá</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Nguyễn Văn A</td>
            <td>Nam</td>
            <td>01/01/1990</td>
            <td>nguyenvana@gmail.com</td>
            <td>Hà Nội</td>
            <td>
                <Button variant="warning">Sửa</Button>{' '}
                <Button variant="danger">Xoá</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nguyễn Văn A</td>
            <td>Nam</td>
            <td>01/01/1990</td>
            <td>nguyenvana@gmail.com</td>
            <td>Hà Nội</td>
            <td>
                <Button variant="warning">Sửa</Button>{' '}
                <Button variant="danger">Xoá</Button>{' '}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
