import Footer from "@/components/Footer";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const [location, setLocation] = useState("");

  const coordinates = { lat: -21.9832, lng: -45.35369 }; // Coordenadas corretas
  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    // Use a API de Geocodificação reversa do Google Maps para obter o nome da localidade
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${googleMapsApiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const address = data.results[0]?.formatted_address;
        setLocation(address || "Localização não encontrada");
      })
      .catch((error) => {
        console.error("Erro ao obter localização", error);
        setLocation("Localização não encontrada");
      });
  }, [coordinates, googleMapsApiKey]);

  return (
    <Box p={4} textAlign="center" bg="white">
      <Heading as="h1" fontSize="6xl" mb={8} color="teal.500">
        Entre em Contato.
      </Heading>
      <Text fontSize="lg" mb={2} color="gray.600">
        Fábrica localizada em Lambari, MG
      </Text>
      <Text fontSize="lg" mb={2} color="gray.600">
        Bairro Pinhão Roxo, Rua José Capistrano, 123
      </Text>
      <Text fontSize="lg" mb={2} color="teal.500">
        Telefone: (00) 1234-5678
      </Text>
      <Text fontSize="lg" mb={2} color="gray.800">
        {location}
      </Text>
      <Box mt={16} marginBottom={16} display="flex" justifyContent="center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.661201575586!2d-45.356164625700906!3d-21.983517979915558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb19bd09f1e0c9%3A0x6ab15348fd6f81e4!2sR.%20Francisco%20Vilela%2C%2078%2C%20Lambari%20-%20MG%2C%2037480-000!5e1!3m2!1spt-BR!2sbr!4v1696896025993!5m2!1spt-BR!2sbr"
          width="80%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactPage;
