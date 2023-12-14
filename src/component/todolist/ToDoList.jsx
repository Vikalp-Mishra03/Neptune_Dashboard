import React, { useState, useEffect, useRef } from 'react'
import { FiPlusCircle } from "react-icons/fi";
import './todolist.scss'
export default function ToDoList() {

    const [showForm, setShowForm] = useState(false);
    const formRef = useRef(null);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setShowForm(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    return (
        <div className='todolist'>
            <div className="inner">
                <h5>To do list</h5>
                <div className="sub-heading">Tasks which assigned to you</div>
                <div className="ic" onClick={toggleForm}>
                    <FiPlusCircle />
                </div>
                {showForm && (
                    <div ref={formRef} className="inputContainer">
                        <div className="form">
                            <input
                                id="t-text"
                                type="text"
                                name="txt"
                                placeholder="Title"
                                className="form-control"
                                required
                            />
                            <a className="btn">Add</a>
                        </div>
                    </div>
                )}

                <div class="list-area">
                    <h6>Important</h6>
                    <div class="single-to-do">
                        <div>
                            <div class="check">
                                <input type="checkbox" />
                                <label class="cbx" for="cbx" >
                                    <span class="light">AWS server backup at 10:00 am</span>
                                </label>
                            </div>
                        </div>
                        <span class="badge"> Primary </span>
                    </div>
                </div>
                <div class="list-area area">
                    <h6>Important</h6>
                    <div class="single-to-do">
                        <div>
                            <div class="check">
                                <input type="checkbox" />
                                <label class="cbx" for="cbx" >
                                    <span class="light">Project graph need to check </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#" className='btn btn1' style={{marginTop:'1.5rem'}}>View full To Do App</a>
            </div>
        </div>
    )
}
