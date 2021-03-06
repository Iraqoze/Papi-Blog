const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Papi's Ultimate Blog</h1>
            <div className="links">
                <a href="/">Home </a>
                <a href="/create" style={
                    {
                        color:'white',
                        backgroundColor:'#f1356d',
                        borderRadius:'8px'
                    }

                }>New Blog </a>
                <a href="/about"> About</a>
            </div>
        </nav>

     );
}
 
export default Navbar;