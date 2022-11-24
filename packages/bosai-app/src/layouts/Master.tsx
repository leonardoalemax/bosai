import { Layout, Breadcrumb, ConfigProvider, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

import "./Master.css";

function Master() {
	return (
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
			<Layout>
				<Header className='header'>App de Coleção de Jogos</Header>
				<Content className='content'>
					<Breadcrumb>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>Search</Breadcrumb.Item>
					</Breadcrumb>
					<div className='page'>
						<Outlet />
					</div>
				</Content>
				<Footer className='footer'>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</ConfigProvider>
	);
}

export default Master;
