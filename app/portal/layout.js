import Navbar from "@components/Navbar"

const PortalLayout = ({ children }) => {
  return (
    <div>
        {children}
        <Navbar/>
    </div>
  )
}

export default PortalLayout