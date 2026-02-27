function Person(props){
    // const {name, title , style} = props;
    // return(
    //     <div style={style}>
    //         <h1>{name}</h1>
    //         <h2>{title}</h2>
    //     </div>
    // )

    //conditional rendering

    // props.name = "Rajib bhai"

    if(props.title === "Developer"){
        return(
            <>
            <div style={props.style}>
                <h1>{props.name}</h1>
                <h2>{props.title}</h2>
            </div>
            {props.children}
            </>
        )
    }
    return null
}

export default Person



//     function Inner(data){
//         console.log(data)
//     }

// function Outter(){
//     let data = "data from outter"
//     Inner(data)
// }