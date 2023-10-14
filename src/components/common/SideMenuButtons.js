import { Box, Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function SideMenuButtons({ currentMenu, menuInfo }) {

    const highlightWhenCurrent = (id, currentMenu) => {
        return (id === currentMenu) ? "contained" : "text";
    }

    // 아래처럼 함수로 빼면 렌더링 안됨. 왜?
    // let renderButtons = (menuInfo) => {
    //     menuInfo.map((menu) => {
    //         //return <Button variant={highlightWhenCurrent(menu.id, currentMenu)} size="large">{menu.label}</Button>
    //         return <Button>dd</Button>;
    //     })
    // }

    const navigate = useNavigate();

    const onMenuClick = (e) => {      // id를 넘겨받음
        navigate(`/settings/${e.target.id}`);
    }
    return (
        <Box>
            <ButtonGroup orientation="vertical" color="primary" fullWidth>
                {
                    menuInfo.map((menu) => {
                        return (
                            <Button
                                id={menu.id}
                                key={menu.id} variant={highlightWhenCurrent(menu.id, currentMenu)}
                                size="large"
                                onClick={onMenuClick}
                            >
                                {menu.label}
                            </Button>
                        )
                    })
                }
            </ButtonGroup>
        </Box>
    )
}

export default SideMenuButtons