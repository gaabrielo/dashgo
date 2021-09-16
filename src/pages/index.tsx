import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input';

export default function SignIn() {
  const { register, handleSubmit } = useForm();

  const handleSignIn = (data) => {
    console.log(data);
  };

  return (
    <Flex w="100vw" height="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            {...register('email')}
          />

          <Input
            name="password"
            type="password"
            label="Senha"
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          onClick={handleSignIn}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
