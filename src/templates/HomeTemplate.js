import { Fragment } from 'react'
import Header from '../component/HomePage/Header'
import { Route } from 'react-router'

// Fragment thẻ này nhủ thẻ div nhưng nó là thẻ vô hình không làm vở layout không hiển thị ra giao diện



export const HomeTemplate = (props) =>
{
    //props (path, component)


  
    return  <Route exact path={props.path} render={(propsRoute) =>
        {
            return <Fragment>
                         <Header></Header>
                        <props.component {...propsRoute}></props.component>
                  </Fragment>
        }}></Route>
  
}