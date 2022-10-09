
import './global.css'
interface MenuProps {
    menu: Array<any>
}

export default function Navbar( {menu}: MenuProps ) {

    return(
        
        <nav id="header-navbar" className="header-navbar">
       

        <ul className="menu">
            {
                menu.map((item:any) => {
                    console.log(item)

                    return(
                        <li>
                            <a href="#" className='link-text menu-link'>{item.name}</a>

                            {item.submenu &&
                                <ul className="submenu-1">
                                    {
                                        item.submenu.map((submenu:any) => {
                                            return(
                                                <li className='submenu-content'>
                                                    <a href="#" className='link-text submenu-link'>
                                                        {submenu.name}
                                                    </a>

                                                    {submenu.submenuLevel2 &&
                                                        <ul className="submenu-2">
                                                            {
                                                                submenu.submenuLevel2.map((submenuLevel2:any) => {
                                                                    return(
                                                                        <li className='submenuLevel2-content'>
                                                                            <a href="#" className='link-text submenuLevel2-link'>
                                                                                {submenuLevel2.name}
                                                                            </a>
                                                                        </li>
                                                                    )
                                                                })
                                                            
                                                            }   
                                                        </ul>
                                                    }
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            }
                        </li>

                    )
                })
            }

        </ul>
        
      </nav>
    )
}