import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            filterName: '',
            filterStatus: 2 
        }
    }
    
    onChange =(event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(name === 'filterName' ? value : this.state.filterName,
                            name === 'filterStatus' ? value : this.state.filterStatus)
        this.setState({
            [name] : value
        });
    }
    render() {
        var {tasks } = this.props; // var tasks = this.props.tasks;
        var {filterName, filterStatus } = this.state;
        var elmTask =tasks.map((task, index) =>{
            return <TaskItem 
                        key={task.id} 
                        index={index} 
                        task={task}
                        onUpdateStatus ={this.props.onUpdateStatus}
                        onDelete={this.props.onDelete}
                        onUpdate={this.props.onUpdate}/>
        });
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng thái</th>
                        <th>Hoạt động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>                            
                            <input 
                            type="text"
                            name="filterName"  
                            className="form-control" 
                            value ={filterName}
                            onChange={this.onChange}/>                            
                        </td>
                        <td>
                            <select 
                            className="form-control" 
                            name="filterStatus"
                            value ={filterStatus}
                            onChange={this.onChange}>
                                <option value={2}>Tất cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmTask}
                </tbody>
            </table>
        );
    }
}

export default TaskList;