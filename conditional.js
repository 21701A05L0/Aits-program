const UserLoggin=(props)=>{
    return <h1>Welcome user</h1>;
}
function GuestLoggin(props){
    return <h1>please signup.</h1>;
}
const SignUp=(props)=>{
    const flag=props.isLoggedIn;
    if(flag){
        return <UserLoggin />;
    }
    return <GuestLoggin />;
}
export default SignUp;