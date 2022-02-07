import React, { useMemo } from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { FaApple } from 'react-icons/fa';
import { AppStore } from 'store/app';

function AppBar() {
  const appStore = AppStore.useState();

  let active = useMemo(() => {
    if (appStore.active) {
      return appStore.active;
    }
    return appStore.apps.find((app) => app.id === 'finder');
  }, [appStore.active, appStore.apps]);

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
        <Text fontWeight={600}>{active.title}</Text>
      </Box>
      <HStack ml={3} spacing={3}>
        {active.items.map((item, idx) => {
          return <Text key={idx}>{item.title}</Text>;
        })}
      </HStack>
    </Flex>
  );
}

export default AppBar;
