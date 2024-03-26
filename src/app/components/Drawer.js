// "use Client"
// "use server";
import { Drawer, DrawerContent, DrawerHeader,DrawerCloseButton,Button, Link, Box, Flex, Icon, Heading} from "@chakra-ui/react";
// import {useDisclosure} from '@nextui-org/react';
// import {useDisclosure} from '@chakra-ui/react'
import { MdDashboard, MdOutlineContactSupport } from "react-icons/md";
import { BiBarChart } from "react-icons/bi";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoPeopleOutline,IoNotificationsOutline,IoSettingsOutline  } from "react-icons/io5";

const SideBar = () => {

    return ( 
        <Box
        bg={'white'}
        w={'20%'} 
        h={'100vh'}
        display={'block'}
        boxShadow={'lg'}
        defaultIndex={1}
        >
          <Heading>LYT</Heading>
          <Flex
          my={6}
          _hover={{bg:'#0FA44A',color:'white'}}
          p={3}
          justifyContent={'flex-start'}
          alignItems={'center'}
          >
            {/* <Icon as={MdDashboard}/>  */}
            {/* <Icon as={MdDashboard} /> */}
            <MdDashboard/>
            <Link>Dashboard</Link>
          </Flex>
          <Flex
          my={6}
          _hover={{bg:'#0FA44A',color:'white'}}
          p={3}
          justifyContent={'flex-start'}
          alignItems={'center'}
          >
            <BiBarChart />
            <Link>Analytics</Link>
          </Flex>
          <Flex
          my={6}
          _hover={{bg:'#0FA44A',color:'white'}}
          p={3}
          justifyContent={'flex-start'}
          alignItems={'center'}
          >
            <IoPeopleOutline />
            <Link>Communities</Link>
          </Flex>
          <Flex
          my={6}
          _hover={{bg:'#0FA44A',color:'white'}}
          p={3}
          justifyContent={'flex-start'}
          alignItems={'center'}
          >
            <IoNotificationsOutline />
            <Link>Notification</Link>
          </Flex>
          <Flex
          my={6}
          _hover={{bg:'#0FA44A',color:'white'}}
          p={3}
          justifyContent={'flex-start'}
          alignItems={'center'}
          >
          <VscFileSubmodule />
            <Link>Media</Link>
          </Flex>
          <Flex
          my={6}
          _hover={{bg:'#0FA44A',color:'white'}}
          p={3}
          justifyContent={'flex-start'}
          alignItems={'center'}
          >
            <MdOutlineContactSupport />
            <Link>Support</Link>
          </Flex>
          <Flex
          my={6}
          _hover={{bg:'#0FA44A',color:'white'}}
          p={3}
          justifyContent={'flex-start'}
          alignItems={'center'}
          >
            <IoSettingsOutline />
            <Link>Settings</Link>
          </Flex>
        </Box>
     );
}
 
export default SideBar;