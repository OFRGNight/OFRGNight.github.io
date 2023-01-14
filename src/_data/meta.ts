function getDevIp(): string | undefined {
  // Try/catch for https://github.com/denoland/deno/issues/25420
  try {
    for (const info of Deno.networkInterfaces()) {
      if (info.family !== "IPv4" || info.address.startsWith("127.")) {
        continue;
      }
      return info.address;
    }
  } catch {
    return undefined;
  }
}

const devIp = getDevIp();

const productionURL = "https://ofrgnight.github.io";
const developmentURL = `http://${devIp}:3000`;

export default {
  siteName: "Oficina RogerNight",
  description: "Oficina mecânica em Ferraz de Vasconcelos",
  tagLine: "Realizamos diversos serviços na área de mecânica de automóveis",
  slogan: "A MELHOR OFICINA DA REGIÃO!",
  address:
    "R. Diácomo Cícero Pereira da Silva, 09 - Conj. Res. Pres. Castello Branco, Ferraz de Vasconcelos - SP, 08535-130",
  about:
    "Oficina mecânica em Ferraz de Vasconcelos com equipe qualificada e variedade de ferramentas para realizar serviços de forma rápida e com qualidade.",
  socials: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/OFRogerNight",
      icon: "assets/images/icons/facebook.svg",
      target: "target='_blank'",
    },
    {
      name: "WhatsApp",
      url: "https://api.whatsapp.com/send?phone=5511911406590&text=Ol%C3%A1%20Rog%C3%A9rio,%20vim%20pelo%20site,%20tudo%20bem?",
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
  url: Deno.env.get("BUILD") == "production" ? productionURL : developmentURL,
  env: Deno.env.get("BUILD") || "development",
  services: [
    {
      name: "Troca de óleo",
      description: "Filtro de óleo também.",
      icon: "assets/images/icons/services/oil.svg",
    },
    {
      name: "Carga em bateria",
      description: "De forma segura!",
      icon: "assets/images/icons/services/battery.svg",
    },
    {
      name: "Injeção Eletrônica",
      description: "Nacionais e importados.",
      icon: "assets/images/icons/services/electronic.svg",
    },
    {
      name: "Revisão",
      description: "Em qualquer veículo.",
      icon: "assets/images/icons/services/revision.svg",
    },
    {
      name: "E muito mais"
      ,description: "Entre em contato."
      ,icon: "assets/images/icons/services/more.svg"
    }
  ],
  team: [
    {
      name: "Rogério",
      role: "CEO / Mecânico",
      image: "assets/images/team/Rogerio.webp",
    },
    // {
    //   name: "André",
    //   role: "Mecânico",
    //   image: "assets/images/team/Andre.webp",
    // },
    // {
    //   name: "Victor",
    //   role: "Mecânico",
    //   image: "assets/images/team/Victor.webp",
    // },
    // {
    //   name: "Octávio",
    //   role: "Aprendiz",
    //   image: "assets/images/team/Octavio.webp",
    // },
    {
      name: "Murillo",
      role: "Aprendiz",
      image: "assets/images/team/Murillo.webp",
    },
  ],
};
