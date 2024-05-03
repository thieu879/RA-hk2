import React from 'react';

const TodoListIndex: React.FC = () => {
  return (
    <>
      BT10:
      <div>
        <div>
          <div>
            <div>
              <div>
                <h3 style={{ textAlign: 'center', marginBottom: '40px' }}>Quản lý công việc</h3>
                <form>
                  <div style={{textAlign:"center"}}>
                    <input style={{width:"700px"}} type="text" id="form2" placeholder='Thêm công việc'/>
                    <button type="submit" style={{backgroundColor:"#50C7C7",border:"none",padding:"3px"}}>Thêm</button>
                  </div>
                </form>
                <ul>
                  <li className="nav-item" role="presentation">
                    <a style={{borderBottom:"2px blue solid",padding:"10px",color:"blue"}}>Tất cả công việc</a>
                  </li>
                </ul>
                <div>
                  <div>
                    <ul>
                      <li style={{ backgroundColor: '#f4f6f7',display:"flex",justifyContent:"space-between" }}>
                        <div style={{padding:"10px"}}>
                          <input type="checkbox" checked />
                          <s>Cras justo odio</s>
                        </div>
                        <div style={{display:"flex",gap:"20px",padding:"10px"}}>
                          <a href="#!" className="text-info" title="Sửa công việc"><i className="fas fa-pencil-alt me-3"></i></a>
                          <a href="#!" style={{color:"red"}} title="Xóa công việc"><i className="fas fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li style={{ backgroundColor: '#f4f6f7',display:"flex",justifyContent:"space-between" }}>
                        <div style={{padding:"10px"}}>
                          <input type="checkbox" />
                          Cras justo odio
                        </div>
                        <div style={{display:"flex",gap:"20px",padding:"10px"}}>
                          <a href="#!" title="Sửa công việc"><i className="fas fa-pencil-alt me-3"></i></a>
                          <a href="#!" style={{color:"red"}} title="Xóa công việc"><i className="fas fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoListIndex;
