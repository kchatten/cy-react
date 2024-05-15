class ClassName extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // States
        }
    }
    render(){
        return(
            // The final output from the class.
        )
    }
}


IIFEs are hoisted to top-level scope

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
    },
    {
      path: "",
      element: 
    },
    {
      path: "",
      element: <Outlet/>,
      children:[{
        "path": "",
        element: 
      }]
    }
  ]
) 

