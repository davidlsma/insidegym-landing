export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  horario: string;
  esVideo?: boolean;
}

export const servicios: Servicio[] = [
  {
    id: 'musculacion',
    nombre: 'Musculación',
    descripcion: 'Sala equipada con máquinas de última generación y área de peso libre. Entrenadores disponibles para guiarte.',
    imagen: '/images/musculacion.jpg',
    horario: 'Lun – Vie · 07:00 a 22:00',
  },
  {
    id: 'body-pump',
    nombre: 'Body Pump',
    descripcion: 'Clase grupal de fuerza con barra y pesas al ritmo de la música. Ideal para todos los niveles.',
    imagen: '/images/bodypump.jpg',
    horario: 'Lun · Mié · Vie · 08:00 / 14:00 / 20:00',
  },
  {
    id: 'cycling',
    nombre: 'Cycling',
    descripcion: 'Pedalea fuerte con música en vivo y luces. Una hora de energía pura que no vas a olvidar.',
    imagen: '/images/cycling.jpg',
    horario: 'Lun · Mié · Vie · 15:00 / 20:15 · Mar · Jue · 14:30',
  },
  {
    id: 'funcional',
    nombre: 'Woman Fit',
    descripcion: 'Clases diseñadas para mujeres, enfocadas en tonificación y entrenamiento funcional. Para todos los niveles.',
    imagen: '/images/funcional.jpg',
    horario: 'Lun a Vie · 08:00 / 19:00 / 20:00',
  },
  {
    id: 'insanity',
    nombre: 'Insanity',
    descripcion: 'Entrenamiento de alta intensidad para quienes buscan resultados reales. No apto para excusas.',
    imagen: '/images/insanity.jpg',
    horario: 'Mar · Jue · 08:30 / 19:00',
  },
];
