"use Client"
import { Drawer, DrawerContent, DrawerHeader,DrawerCloseButton,Button, Link, Box} from "@chakra-ui/react";
// import {useDisclosure} from '@nextui-org/react';
import {useDisclosure} from '@chakra-ui/react'

const SideBar = () => {

    return ( 
        <Box
        w={'20%'} 
        display={'block'}
        >
        <Link>Dashboard</Link>
        <Link>Analytics</Link>
        <Link>Communities</Link>
        <Link>Notification</Link>
        <Link>Media</Link>
        <Link>Support</Link>
        <Link>Settings</Link>
        </Box>
     );
}
 
export default SideBar;