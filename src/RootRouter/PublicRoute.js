import PublicLayout from "../Layout/PublicLayout";


function PublicRoute({children}){
   
    const accessToken=""

    if(!accessToken){
        return <PublicLayout children={children} />
    }

    
    

}
export default PublicRoute;