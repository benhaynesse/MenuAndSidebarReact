**Menu and Sidebar**

Include Menu and Sidebar

Props:

navItems = an Array of Items to set as navigation tabs and side bar tabs

status = A boolean to say whether the side bar is visible or not

toggleSideBar() = function to set status to oppposite of current.

*optional*- width = Sets the width you want the sidebar to come accross the screen. **Default Value is 250px**


example - `<MenuAndSlider navItems={navItems} status={this.state.status} toggleSideBar={()=>this.toggleSideBar()} />`
