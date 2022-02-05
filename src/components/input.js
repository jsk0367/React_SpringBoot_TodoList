function Input(props){
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
            Todo &nbsp; 
            <input type="text" required={true} value={props.input} onChange={props.handlechange} />
            </label>
            <input type="submit" value="Create"/>
        </form>

    )
}

export default Input;