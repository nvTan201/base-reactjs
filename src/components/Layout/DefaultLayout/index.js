import Header from './Header';
import SidebarLeft from './SidebarLeft';
import SidebarRigth from './SidebarRight';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SidebarLeft />
                <div className="content">{children}</div>
                <SidebarRigth />
            </div>
        </div>
    );
}

export default DefaultLayout;
