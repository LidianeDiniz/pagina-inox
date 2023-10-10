import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    styles: {
        global: {
          body: {
            backgroundColor:  'gray.200',
            fontFamily: "Roboto, sans-serif",
            color: "gray.600",
            lineHeight: "tall",
          },
          a: {
            color: "teal.500",
            textDecoration: "none",
            _hover: {
              textDecoration: "underline",
            },
          },
        },
      },
    })