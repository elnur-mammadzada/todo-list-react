import React, { useEffect, useState } from 'react'
import MUITable from '../../components/Table/MUITable'
import MUITextField from '../../components/TextField/MUITextField'
import MUIButton from '../../components/Button/MUIButton'
import ClearIcon from '@mui/icons-material/Clear';
import '../TodoMenu/TodoMenu.css'
import Container from '@mui/material/Container';
import { TableCell, TableRow } from '@mui/material';
import axios from 'axios'
import MUICheckbox from '../../components/Checkbox/MUICheckbox';

const TodoMenu = () => {
    const BASE_URL = "https://66fcde2bc3a184a84d1834e8.mockapi.io/api"
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [filteredTodo, setFilteredTodo] = useState([])


    const handleUpdate = (e) => {
        setNewTodo(e.target.value);


    }

    const makeTodo = (newTodo) => {
        setTodos([...todos, newTodo])

    }


    const createTodo = async () => {
        if (!newTodo) return;
        const request = {
            name: newTodo,
            completed: false,

        }
        await axios.post(`${BASE_URL}/users/todos`, request)
        await getData()
        setNewTodo('')
    }

    const getData = async () => {
        await axios.get(`${BASE_URL}/users/todos`).then((response) => {
            setTodos(response?.data)
            setFilteredTodo(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    const clearTodo = (todoId) => {
        setTodos([...todos.filter((todo) => todo.id !== todoId)])
    }
    const removeTodo = async (id) => {
        console.log(id)
        await axios.delete(`${BASE_URL}/users/todos/${id}`)
        clearTodo(todos.id)
        getData()
    }


    const handleChange = async (todo) => {


        await axios.put(`${BASE_URL}/users/todos/${todo.id}`, { ...todo, completed: !todo.completed });


        setTodos((prev) => {
            let newTodos = prev.map((item) => (item.id == todo.id ? { ...item, completed: !todo.completed } : item))
            console.log(newTodos);
            return newTodos
        }
        );
    };

    const handleFiltered = (e) => {
        const newTodo = todos?.filter((todo => todo.name.toLowerCase().includes(e.target.value.toLowerCase())))
        setFilteredTodo(newTodo)
    }


    return (
        <Container sx={{ width: '600px' }}>
            <div className='todo'>
                <div className="todo__header">
                    <div className="todo__header-input">
                        <MUITextField onChange={handleUpdate} value={newTodo} sx={{ width: '100%' }} />
                    </div>
                    <div className="todo__header-btn">
                        <MUIButton onClick={createTodo} text={"YARAT"} variant={"contained"} color={"success"} />
                    </div>

                </div>
                <MUITextField onChange={handleFiltered} />
                <div className='todo__table'>
                    <MUITable   >
                        {filteredTodo.map((todo) => (
                            <TableRow key={todo.id} >
                                <TableCell>
                                    <MUICheckbox inputProps={{ 'aria-label': 'controlled' }} onChange={() => handleChange(todo)} checked={todo.completed} />

                                </TableCell>
                                <TableCell> {todo.name}</TableCell>
                                <TableCell align='right'><ClearIcon onClick={() => removeTodo(todo.id)} sx={{ cursor: 'pointer' }} /></TableCell>
                            </TableRow>
                        ))}
                    </MUITable>
                </div>
            </div>
        </Container >
    )
}

export default TodoMenu




