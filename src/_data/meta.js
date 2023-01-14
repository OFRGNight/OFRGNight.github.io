let productionURL = "https://ofrgnight.github.io";
let developmentURL = "http://localhost:8080";

module.exports = {
  siteName: "Oficina RogerNight",
  description: "Oficina mecânica em Ferraz de Vasconcelos",
  tagLine: "Realizamos diversos serviços na área de mecânica de automóveis",
  slogan: "A MELHOR OFICINA DA REGIÃO!",
  address:
    "R. Diácomo Cícero Pereira da Silva, 09 - Conj. Res. Pres. Castello Branco, Ferraz de Vasconcelos - SP, 08535-130",
  about:
    "Oficina mecânica em Ferraz de Vasconcelos com equipe qualificada e variedade de ferramentas para realizar serviços rápidos e de qualidade.",
  socials: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/OFRogerNight",
      icon: "assets/images/icons/facebook.svg",
      target: "target='_blank'",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/5511911406590",
      icon: "assets/images/icons/whatsapp.svg",
      target: "target='_blank'",
    },
    {
      name: "Email",
      url: "mailto:ofrgnight@gmail.com",
      icon: "assets/images/icons/email.svg",
      target: "",
    },
  ],
  url: process.env.ELEVENTY == "production" ? productionURL : developmentURL,
  env: process.env.ELEVENTY || "development",
  services: [
    {
      name: "Troca de óleo",
      description: "Filtro de óleo também",
      icon: "assets/images/icons/services/oil.svg",
    },
    {
      name: "Carga em bateria",
      description: "Recarga completa",
      icon: "assets/images/icons/services/battery.svg",
    },
    {
      name: "Injeção Eletrônica",
      description: "Nacionais e importados",
      icon: "assets/images/icons/services/electronic.svg",
    },
    {
      name: "Revisão",
      description: "Em qualquer veículo",
      icon: "assets/images/icons/services/revision.svg",
    },
  ],
  team: [
    {
      name: "Rogério",
      role: "CEO / Mecânico",
      image: "assets/images/team/Rogerio.webp",
    },
    {
      name: "André",
      role: "Mecânico",
      image: "assets/images/team/Andre.webp",
    },
    {
      name: "Victor",
      role: "Mecânico",
      image: "assets/images/team/Victor.webp",
    },
    {
      name: "Octávio",
      role: "Aprendiz",
      image: "assets/images/team/Octavio.webp",
    },
    {
      name: "Murillo",
      role: "Aprendiz",
      image: "assets/images/team/Murillo.webp",
    },
  ],
};
