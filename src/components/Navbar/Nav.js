import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const Nav = () => {
	const { oktaAuth, authState } = useOktaAuth();

	const loggingIn = async () => oktaAuth.signInWithRedirect({ originalUri: "/" });

	const loggingOut = async () => oktaAuth.signOut();

	return (
		<div>
			<Link to="/">
				<h2>Octa Login</h2>
			</Link>
			<ul>
				<li>
					<Link to="/profile">Profile</Link>
				</li>
				<li>
					{
						authState?.isAuthenticated ? (
							<button onClick={loggingOut}>Logout</button>
						) : (
							<button onClick={loggingIn}>Login</button>
						)
					}
				</li>
			</ul>
		</div>
	);
};


export default Nav;
