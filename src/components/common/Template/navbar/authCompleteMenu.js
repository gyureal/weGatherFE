import React, { useState } from "react";
// nav
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
// menu
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
// Icon
import AddIcon from '@mui/icons-material/AddCircleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
// menuIcon
import AccountCircle from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";
import { requestLogout } from "../../../../slice/authSlice";
import { useNavigate } from "react-router-dom";

export default function AuthCompleteMenu({ currentUser }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const onProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const onMenuClose = () => {
        setAnchorEl(null);
        onMobileMenuClose();
    };

    const onMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const onMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onLogoutClick = async (event) => {
        try {
            await dispatch(requestLogout()).unwrap();
            alert("로그아웃 되었습니다.");
            navigate("/");
        } catch {
            alert("로그아웃에 실패했습니다.");
        }
    }

    const onProfileMenuClick = () => {
        navigate(`/profile/${currentUser.username}`);
    }

    const onSettingsMenuClick = () => {
        navigate(`/settings/profile`);
    }

    const menuId = 'primary-search-account-menu';
    const renderProfileMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={onMenuClose}
        >
            <MenuItem onClick={onMenuClose}>
                <Typography color="text.secondary">{currentUser.username}</Typography>
            </MenuItem>
            <MenuItem onClick={onProfileMenuClick}>
                <ListItemIcon>
                    <AccountCircle fontSize="small" />
                </ListItemIcon>
                <ListItemText>프로필</ListItemText>
            </MenuItem>
            <MenuItem onClick={onMenuClose}>
                <ListItemIcon>
                    <GroupsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>스터디</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={onSettingsMenuClick}>
                <ListItemIcon>
                    <SettingsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>설정</ListItemText>
            </MenuItem>
            <MenuItem onClick={onLogoutClick}>
                <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>로그아웃</ListItemText>
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={onMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={onProfileClick}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    return (
        <div>
            <Grid container>
                <Box sx={{ mx: 1, display: { xs: 'none', md: 'flex' } }}>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Box>

                <Box sx={{ mx: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                        color="inherit"
                        variant="outlined"
                        href="#addGroup"
                        startIcon={<AddIcon />}
                    >
                        모임 추가
                    </Button>
                </Box>

                <Box
                    sx={{
                        ml: 1,
                        flexGrow: 0,
                        display: { xs: 'none', md: 'flex' },
                    }}
                >
                    <Tooltip title="Open profile">
                        <IconButton onClick={onProfileClick} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                    {renderProfileMenu}
                </Box>

                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={onMobileMenuOpen}
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </Box>
            </Grid>
            {renderMobileMenu}
            {renderProfileMenu}
        </div>
    );
}