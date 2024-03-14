import { BrowserRouter,Route,Routes } from "react-router-dom"
import DeleteApi from "./DeleteApi"
import GetApi from "./GetApi"
import Header from "./Header"
import PostApi from "./PostApi"

function Routing()
{
    return(
        <div>
       <BrowserRouter>
       <Header></Header>
       <Routes>
        <Route path="Post" element={<PostApi></PostApi>}></Route>
        <Route path="Get" element={<GetApi></GetApi>}></Route>
        <Route path="Delete" element={<DeleteApi></DeleteApi>}></Route>
       </Routes>
       </BrowserRouter>
        </div>
    )
}
export default Routing