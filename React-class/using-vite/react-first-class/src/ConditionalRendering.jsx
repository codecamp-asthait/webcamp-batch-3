function ConditionalRendering() {
    const isLoggedIn = false;

    // if (isLoggedIn) {
    //     return <h1>Welcome back!</h1>;
    // }else{
    //     return <h1>Please sign up.</h1>;
    // }
    return (
        <>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
        </>
    )
}

export default ConditionalRendering;