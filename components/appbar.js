import React from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { FaApple } from 'react-icons/fa';

function AppBar() {
	return (
		<Flex
			alignItems={'center'}
			h='30px'
			px={3}
			bg='blackAlpha.500'
			backdropFilter={'blur(10px)'}
			textColor='white'
			fontSize={14}
			userSelect='none'
		>
			<Box fontSize={16}>
				<FaApple />
			</Box>
			<Box ml={4}>
				<Text fontWeight={600}>XenCodes</Text>
			</Box>
			<HStack ml={3} spacing={3}>
				<Text>File</Text>
				<Text>Edit</Text>
				<Text>View</Text>
				<Text>Go</Text>
				<Text>Help</Text>
			</HStack>
		</Flex>
	);
}

export default AppBar;
