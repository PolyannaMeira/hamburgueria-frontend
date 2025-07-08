import {Outlet} from 'react-router-dom';
import { Header, Footer } from '../../components';

export default function UserLayout() {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>  
    )
}