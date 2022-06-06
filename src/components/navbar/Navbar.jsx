import React from "react";
import "./navbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="navbarWrapper">
				<div className="navLeft">
					<span className="logo">green.light</span>
				</div>
				<div className="navRight">
					<div className="navbarIconContainer">
						<NotificationsNone />
						<span className="iconBadge">4</span>
					</div>
                    <div className="navbarIconContainer">
						<Language />
						<span className="iconBadge">4</span>
					</div>
                    <div className="navbarIconContainer">
						<Settings />
					</div>
                    <img src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="" className="navAvatar"/>
				</div>
			</div>
		</div>
	);
}
