export type Oficina = {
  id: string;
  pais: string;
  ciudad: string;
  flag: string;
  direccion: string;
  telefono: string;
  /** URL canónica de Google Maps con la dirección formateada. */
  mapsUrl: string;
};

export const oficinas: Oficina[] = [
  {
    id: "es",
    pais: "España",
    ciudad: "Palma",
    flag: "🇪🇸",
    direccion: "Gremi Fusters, 33, Pol. Son Castelló, Palma",
    telefono: "+34 910 05 94 69",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gremi+Fusters+33+Pol+Son+Castello+Palma",
  },
  {
    id: "mx",
    pais: "México",
    ciudad: "CDMX",
    flag: "🇲🇽",
    direccion:
      "Campos Elíseos 400-Planta 7, Polanco V Secc, Miguel Hidalgo, 11550 CDMX",
    telefono: "+52 55 7389 6450",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Campos+Eliseos+400+Polanco+CDMX",
  },
  {
    id: "co",
    pais: "Colombia",
    ciudad: "Bogotá",
    flag: "🇨🇴",
    direccion: "Cra. 11B #99-25, Bogotá",
    telefono: "+57 5350 587 1188",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Cra+11B+99-25+Bogota",
  },
  {
    id: "pt",
    pais: "Portugal",
    ciudad: "Lisboa",
    flag: "🇵🇹",
    direccion: "R. Alexandre Herculano 50, Lisboa, Lisboa 1250-011",
    telefono: "+351 913 058 508",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=R.+Alexandre+Herculano+50+Lisboa",
  },
];
