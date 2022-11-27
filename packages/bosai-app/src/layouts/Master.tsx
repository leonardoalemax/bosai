import { Layout, ConfigProvider, theme } from "antd";
import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

import "./Master.css";

function Master() {
	const colorPrimary = "#FFCA05";

	const layoutStyle: CSSProperties = {
		backgroundColor: colorPrimary,
	};

	return (
		<Layout style={layoutStyle}>
			<Header className='header' style={layoutStyle}>
				Bōsai
			</Header>
			<Content className='content' style={layoutStyle}>
				<ConfigProvider
					componentSize={"large"}
					theme={{
						algorithm: theme.defaultAlgorithm,
						token: {
							colorPrimary,
							borderRadius: 8,
						},
					}}>
					<Outlet />
				</ConfigProvider>
			</Content>
			<Footer className='footer' style={layoutStyle}>
				Bōsai ©2022 Created by Alemax
			</Footer>
		</Layout>
	);
}

export default Master;
