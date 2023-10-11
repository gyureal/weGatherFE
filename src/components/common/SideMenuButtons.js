import { Box, Button, ButtonGroup } from '@mui/material'
import React from 'react'

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

    return (

        <Box>
            <ButtonGroup orientation="vertical" color="primary" fullWidth>
                {
                    menuInfo.map((menu) => {
                        return <Button key={menu.id} variant={highlightWhenCurrent(menu.id, currentMenu)} size="large">{menu.label}</Button>
                    })
                }
            </ButtonGroup>
        </Box>
    )
}

export default SideMenuButtons