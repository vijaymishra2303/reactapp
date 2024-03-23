import { BrowserRouter,Route,Routes } from "react-router-dom"
import DeleteApi from "./DeleteApi"
import GetApi from "./GetApi"
import Header from "./Header"
import PostApi from "./PostApi"
import Home from "./Home"
import FileUpload from "./FileUpload"


function Routing()
{
    return(
        <div className="menu-header">
       <BrowserRouter>
       <Header></Header>
       <Routes>
       <Route path="/" element={<Home></Home>}></Route>
        <Route path="Post" element={<PostApi></PostApi>}></Route>
        <Route path="Get" element={<GetApi></GetApi>}></Route>
        <Route path="Delete" element={<DeleteApi></DeleteApi>}></Route>
       <Route path="FileUp" element={< FileUpload></FileUpload>}></Route>
       </Routes>
       </BrowserRouter>
        </div>
    )
}
export default Routing