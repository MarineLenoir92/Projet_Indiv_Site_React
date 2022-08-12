import "./SideBar.css"
import portraitabout from "./portraitabout.jpg"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={portraitabout} className="photoabout" alt="portait blogueuse"></img>
            <p className="sideText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.</p>
        </div>
    </div>
  )
}
