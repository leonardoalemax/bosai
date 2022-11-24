import { Layout, Breadcrumb, ConfigProvider, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

import "./Master.css";

function Master() {
	return (
		<Layout>
			<Header className='header'>Bōsai</Header>
			<Content className='content'>
				<Breadcrumb>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>Collection</Breadcrumb.Item>
				</Breadcrumb>
				<ConfigProvider
					componentSize={"large"}
					theme={{
						algorithm: theme.darkAlgorithm,
						token: {
							colorPrimary: "#FFCA05",
							colorBgBase: "#221e1e",
							borderRadius: 8,
						},
					}}>
					<div className='page'>
						<Outlet />
					</div>
				</ConfigProvider>
			</Content>
			<Footer className='footer'>Bōsai ©2022 Created by Alemax</Footer>
		</Layout>
	);
}

export default Master;
