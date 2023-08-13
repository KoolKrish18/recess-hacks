import Navbar from "@components/Navbar"

const PortalLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
        <div className="flex-1">
          {children}
        </div>
        <Navbar/>
    </div>
  )
}

export default PortalLayout