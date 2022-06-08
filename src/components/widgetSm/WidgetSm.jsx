import { Visibility } from "@mui/icons-material";
import "./widgetSm.css";

export default function WidgetSm() {
	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Members</span>
			<ul className="widgetSmList">
				<li className="widgetSmListItem">
					<img
						className="widgetSmImg"
						src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
						alt=""
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Helena Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img
						className="widgetSmImg"
						src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
						alt=""
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Helena Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img
						className="widgetSmImg"
						src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
						alt=""
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Helena Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img
						className="widgetSmImg"
						src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
						alt=""
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Helena Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img
						className="widgetSmImg"
						src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
						alt=""
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Helena Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
			</ul>
		</div>
	);
}
