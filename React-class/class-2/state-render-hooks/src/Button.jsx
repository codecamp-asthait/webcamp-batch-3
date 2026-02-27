function Button ({children , onClick , ...rest}) {

    return (
        <button onClick={(e)=>{
            e.stopPropagation();
            onClick && onClick(e);
        }} {...rest} >
            {children}
        </button>
    )
}

export default Button