// "use Client"
// "use server";
import { Drawer, DrawerContent, DrawerHeader,DrawerCloseButton,Button, Link, Box, Flex, Icon} from "@chakra-ui/react";
// import {useDisclosure} from '@nextui-org/react';
// import {useDisclosure} from '@chakra-ui/react'
import { MdDashboard, MdOutlineContactSupport } from "react-icons/md";
import { BiBarChart } from "react-icons/bi";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoPeopleOutline,IoNotificationsOutline,IoSettingsOutline  } from "react-icons/io5";

const SideBar = () => {

    return ( 
        <Box
        w={'20%'} 
        display={'block'}
        >
          <Flex>
            {/* <Icon as={MdDashboard}/>  */}
            {/* <Icon as={MdDashboard} /> */}
            <MdDashboard/>
            <Link>Dashboard</Link>
          </Flex>
          <Flex>
            <BiBarChart />
            <Link>Analytics</Link>
          </Flex>
          <Flex>
            <IoPeopleOutline />
            <Link>Communities</Link>
          </Flex>
          <Flex>
            <IoNotificationsOutline />
            <Link>Notification</Link>
          </Flex>
          <Flex>
          <VscFileSubmodule />
            <Link>Media</Link>
          </Flex>
          <Flex>
            <MdOutlineContactSupport />
            <Link>Support</Link>
          </Flex>
          <Flex>
            <IoSettingsOutline />
            <Link>Settings</Link>
          </Flex>
        </Box>
     );
}
 
export default SideBar;