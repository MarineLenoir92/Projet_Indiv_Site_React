import "./SideBar.css"
import portraitabout from "./portraitabout.jpg"

export default function SideBar() {
  return (
    <div className="sidebar">
      {/* BLOC ABOUT */}
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={portraitabout} className="photoabout" alt="portait blogueuse"></img>
            <p className="sideText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.</p>
        </div>
      {/* BLOC CATEGORIES */}
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
            <ul className='sideList'>
              <li className='sideListItems'>Destinations</li>
              <li className='sideListItems'>Inspirations</li>
              <li className='sideListItems'>Sweat Hotels</li>
              <li className='sideListItems'>Foodtrip</li>
            </ul>
        </div>
    </div>
  )
}
