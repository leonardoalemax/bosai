import { Layout, Breadcrumb } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

import "./Master.css";

function Master() {
	return (
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
	);
}

export default Master;
