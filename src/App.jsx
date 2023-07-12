import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav/Nav'
import Card from './components/Card/Card';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Content from './components/shopUi/Content';

export default function App() {
 
  const router = createBrowserRouter([
    {
      path:'./components/shopUi/Content.jsx',
      element:<Content/>,
    },
  ]);

  return (
    <>
<Nav/>
<div className='d-flex p-2 m-4'>

<Card 
image='https://slimages.macysassets.com/is/image/McomMedia/media/052923_MENS_CAT_PAGE_01_1501913.jpg'
category = 'Mens'
details ='All mens accessory available at your fingertips'
btnIns = 'Show'
item = './components/shopUi/Content.jsx'
/>
<Card 
image='https://5.imimg.com/data5/SELLER/Default/2020/11/DN/PQ/RM/112378889/women-s-top-skirt-sets-500x500.jpeg'
category = 'Womens'
details ='All Womens accessory available at your fingertips'
btnIns = 'Show'
item = {router}
/>
<Card 
image='https://images.meesho.com/images/products/126350976/e47te_512.webp'
category = 'Kids'
details ='All Kids accessory available at your fingertips'
btnIns = 'Show'
item = {router}
/>
</div>
    </>
      );
}
