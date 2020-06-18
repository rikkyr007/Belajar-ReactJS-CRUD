import React, { Component } from 'react';

class Todo extends Component{
    constructor(props){
        super(props)    
        this.state = {   
            edit: false, 
            id: null, 
            done: false,
            input: "",
            mockData: [
                ...this.props.mockData
            ]
        }
    }
   

    onChangeHandler = (e) => {
        this.setState({
            ...this.state,
            input:e.target.value
        })
    }  
    onSubmitHandle(event){
        event.preventDefault();
        this.setState({
            mockData: [
                ...this.state.mockData,{
                    id: Date.now(),
                    title: this.state.input,
                    done: false,
                    date: new Date()
                }
            ]
        })
    }
    onDeleteHandle(){
        let id = arguments[0];
        this.setState({
            mockData: this.state.mockData.filter(
                item => {
                    if(item.id !== id){
                        return item;
                    }
                }
            )
        })
    }
    renderEditForm(){
        if(this.state.edit){
            return <form onSubmit={this.onUpdateHandle.bind(this)}>
                <input type="text" name="updatedItem" className="item" defaultValue={this.state.title} />        
                <button className="update-add-item">Update</button>
            </form>
        }
    }
    onEditHandle(){
        this.setState({
            edit: true,
            id: arguments[0],
            title: arguments[1]
        })
    }
    onUpdateHandle(event){
        event.preventDefault();
        this.setState({
            ...this.state,
            edit: false,
            mockData: this.state.mockData.map(item => {
                if(item.id === this.state.id){
                    item['title'] = event.target.updatedItem.value;
                }
                return item;
            })
        })
    }
    onCompleteHandle = (id) => {
        this.setState({
            mockData: this.state.mockData.map(item => {
                if(item.id === id){
                    item['done'] = true;
                }
                return item;
            })
        })
    }
    render(){
        return(
            <div>
                { this.renderEditForm() }
                <form onSubmit={this.onSubmitHandle.bind(this)}>
                <input type="text" className="item" value={this.state.input} onChange={this.onChangeHandler} />
                <button className="btn-add-item"> Add </button>
                </form>
                <ul>
                    { this.state.mockData.map(i =>  {
                        return(
                        <li key={i.id} className={ i.done ? 'done' : 'hidden' }>
                            {i.title}
                            <button onClick={this.onDeleteHandle.bind(this, i.id)}>
                                Delete
                            </button>
                            <button onClick={this.onEditHandle.bind(this, i.id, i.title)}>
                                Edit
                            </button>
                            <button onClick={ () => this.onCompleteHandle(i.id)}>
                                Complete
                            </button>
                        </li>
                    )}) }
                </ul>
            </div>
        )
    }
}

export default Todo;