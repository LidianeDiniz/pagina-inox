import { Box, Center, Image, Text } from "@chakra-ui/react";

interface ProductCardProps {
  title: string;
  imageUrl: string;
  description: string;
  imageBoxSize: string;
  linkStyles?: React.CSSProperties;
}

export function ProductCard({
  title,
  imageUrl,
  description,
  imageBoxSize,
  linkStyles
}: ProductCardProps) {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      position="relative"
    >
      <Center h={imageBoxSize} display="flex">
        <Image
          src={imageUrl}
          alt={title}
          boxSize={imageBoxSize}
          objectFit="cover"
        />
      </Center>
      <Text fontSize="xl" fontWeight="bold" mt={4} color="blue.600">
        {title}
      </Text>
      <Text mt={2}>{description}</Text>
    </Box>
  );
}
