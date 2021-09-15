import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {!!showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Mendonça</Text>
          <Text color="gray.300" fontSize="small">
            gabriel@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gabriel Mendonça"
        src="https://github.com/gaabrielo.png"
      />
    </Flex>
  );
}
