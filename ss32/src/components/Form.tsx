import React, { useState, useEffect } from 'react';

interface FormProps {
  Add: (text: string) => void;
}

const Form: React.FC<FormProps> = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const inputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);  
  };

  const clickHandler = () => {
    if (inputValue.trim() !== '') {
      const newTasks = [...tasks, inputValue];
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      setInputValue('');
    }
  };

    const deleteValue = (index: number) => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
            });
            const updatedTasks = [...tasks];
            updatedTasks.splice(index, 1);
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
    });
    
  };

  const editValue = (index: number) => {
    setEditIndex(index);
    setInputValue(tasks[index]);
  };

  const saveEdit = () => {
    if (editIndex !== null && inputValue.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = inputValue;
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setInputValue('');
      setEditIndex(null);
    }
  };

  return (
    <div>
      <form style={{width:"500px"}}>
        <h2>Danh sách công việc</h2>
        <input style={{width:"350px"}} value={inputValue} onChange={inputValueHandler} type="text" placeholder='Nhập đi please!!!'/>
        {editIndex !== null ? (
          <button type="button" onClick={saveEdit}>
            Save
          </button>
        ) : (
          <button type="button" onClick={clickHandler}>
            Add
          </button>
        )}
      </form>
      <div>  
        {tasks.map((task, index) => (
          <div key={index} style={{display:"flex",justifyContent:"space-between",backgroundColor:"red",marginTop:"20px",padding:"10px"}}>
            <div>{task}</div>
            <div>
              <button onClick={() => deleteValue(index)}><i className="fa-solid fa-trash-can"></i></button>
              <button onClick={() => editValue(index)}><i className="fa-solid fa-wrench"></i></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
