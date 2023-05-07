import { useState } from 'react';
import { Center, Heading, Input, ScrollView, Skeleton, Text, VStack } from 'native-base';

import ScreenHeader from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { TouchableOpacity } from 'react-native';
import { Button } from '@components/Button';


const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(true);

  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {
            photoIsLoading ?
              <Skeleton
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded='full'
                startColor='gray.500'
                endColor='gray.400'
              />
              :
              <UserPhoto
                source={{ uri: 'https://github.com/EmilyGMG.png' }}
                alt='Foto do usuário'
                size={PHOTO_SIZE}
              />
          }

          <TouchableOpacity>
            <Text color='green.500' fontWeight='bold' fontSize='md' mt={2} mb={2}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input
            bg="gray.600"
            placeholder='Nome'
          />

          <Input
            bg="gray.600"
            placeholder='Nome'
            value='email@email.com'
            isDisabled
          />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color='gray.200' fontSize='md' mb={2} mt={12} alignSelf='flex-start'>
            Alterar senha
          </Heading>

          <Input
            bg="gray.600"
            placeholder='Senha antiga'
            secureTextEntry
          />

          <Input
            bg="gray.600"
            placeholder='Nova antiga'
            secureTextEntry
          />

          <Input
            bg="gray.600"
            placeholder='Confirme a nova antiga'
            secureTextEntry
          />

          <Button title='Atualizar' mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  )
}