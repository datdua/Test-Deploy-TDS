import React from "react";
import {
    CSidebar,
    CSidebarBrand,
    CSidebarHeader,
    CSidebarNav,
    CNavTitle,
    CNavGroup,
    CSidebarToggler,
    CNavLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { NavLink, Outlet } from "react-router-dom";
import {
    cilSpeedometer,
    cilPuzzle,
    cilUser,
    cilBank,
    cilCart,
    cilInbox,
    cilPeople,
    cilTextStrike,
    cilDiamond,
    cilWatch
} from "@coreui/icons";
import "../../components/Sidebar/SidebarAdmin.css";

function SideBarAdmin() {
    return (
        <div className="sidebar-admin" style={{ display: "flex" }}>
            <CSidebar className="sidebar-full-height border-end" colorScheme="dark">
                <CSidebarHeader className="border-bottom">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/the-diamond-store-423602.appspot.com/o/img-logo%2Ftest.png?alt=media&token=6d383b90-8cd5-48d5-81d2-c82991379de4"
                        alt="Logo"
                        className="sidebar-logo"
                    />
                    <CSidebarBrand> THE DIAMOND STORE </CSidebarBrand>
                </CSidebarHeader>
                <CSidebarNav>
                    <CNavTitle style={{ marginTop: "0", fontSize: "15px" }}>MENU</CNavTitle>

                    <NavLink
                        to="/sale-staff/profile"
                        className="sidebar-nav-item"
                        activeClassName="active"
                    >
                        <CIcon className="nav-icon" icon={cilUser} /> Thông tin cá nhân
                    </NavLink>

                    <NavLink
                        to="/sale-staff/transaction-manager"
                        className="sidebar-nav-item"
                        activeClassName="active"
                    >
                        <CIcon className="nav-icon" icon={cilBank} /> Quản lý giao dịch
                    </NavLink>

                    <NavLink
                        to="/sale-staff/order-manager"
                        className="sidebar-nav-item"
                        activeClassName="active"
                    >
                        <CIcon className="nav-icon" icon={cilInbox} /> Đơn hàng
                    </NavLink>

                    <NavLink
                        to="/sale-staff/promotion-manager"
                        className="sidebar-nav-item"
                        activeClassName="active"
                    >
                        <CIcon className="nav-icon" icon={cilTextStrike} /> Mã giảm giá
                    </NavLink>
                </CSidebarNav>
                <CSidebarHeader className="border-top" style={{ height: "50px" }}>
                    <NavLink to="/" className="sidebar-nav-item" activeClassName="active">
                        <CSidebarToggler style={{ marginRight: "10px" }} /> Đăng xuất
                    </NavLink>
                </CSidebarHeader>
            </CSidebar>
            <div
                style={{
                    flex: 1,
                    paddingTop: "10px",
                    overflowX: "auto",
                    overflowY: "hidden",
                    maxHeight: "100vh",
                }}
            >
                <div className="sidebar-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default SideBarAdmin;
