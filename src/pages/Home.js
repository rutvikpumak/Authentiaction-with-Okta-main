import useAuthUser from "../hook/getUser";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
	const { authState } = useOktaAuth();
	const userInfo = useAuthUser();

	return (
		<div>
			{authState?.isAuthenticated ? (
				<>
					<h2>Welcome back, {userInfo?.name}</h2>
					
				</>
			) : (
				<p style={{ textAlign: "center", marginTop: "6rem", fontSize: '2rem' }}>
					Please login to see data
				</p>
			)}
		</div>
	);
};



export default Home;
