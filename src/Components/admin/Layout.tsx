import Sidebar from "../Sidebar"; // Your Flowbite sidebar component

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <Sidebar>{ children}</Sidebar>;
};

export default Layout;
