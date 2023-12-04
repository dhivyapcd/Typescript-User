type SelectedUserProps={
    user:string
}
export const SelectedUser=({user}:SelectedUserProps)=>{
    return<h1>{user}</h1>
}