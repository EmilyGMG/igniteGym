import { HStack, Heading, VStack, Text } from 'native-base'
import React from 'react'

export default function HistoryCard() {
  return (
    <HStack w='full' px={5} mb={3} bg='gray.600' rounded='md' alignItems='center' justifyContent='space-between'>
      <VStack mr={5} flex={1}>
        <Heading color='white' fontSize='md' textTransform='capitalize' fontFamily='heading' numberOfLines={1}>
          Costas
        </Heading>
        <Text color='gray.100' fontSize='lg' numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>
      <Text color='gray.300' fontSize='md'>08:56</Text>
    </HStack>
  )
}