const cursos = [
  // PRIMER AÑO - 1 y 2 ciclo
  { id: "ALGMAT", nombre: "Álgebra matricial y geometría analítica", ciclo: 1, prerrequisitos: [], desbloquea: ["CALDIF", "CALINT"] },
  { id: "FUND_CAL", nombre: "Fundamentos de cálculo", ciclo: 1, prerrequisitos: [], desbloquea: ["CALDIF"] },
  { id: "FUND_FIS", nombre: "Fundamentos de física", ciclo: 1, prerrequisitos: [], desbloquea: ["FIS1", "LAB_FIS1"] },
  { id: "INTRO_BIO", nombre: "Introducción a la ingeniería biomédica", ciclo: 1, prerrequisitos: [], desbloquea: [] },
  { id: "COM_RED", nombre: "Comunicación y redacción", ciclo: 1, prerrequisitos: [], desbloquea: [] },
  { id: "FILOS", nombre: "Filosofía", ciclo: 1, prerrequisitos: [], desbloquea: [] },
  { id: "CALDIF", nombre: "Cálculo diferencial", ciclo: 2, prerrequisitos: ["ALGMAT", "FUND_CAL"], desbloquea: ["CALINT"] },
  { id: "FIS1", nombre: "Física 1", ciclo: 2, prerrequisitos: ["FUND_FIS"], desbloquea: ["FIS2", "FUND_PROG"] },
  { id: "LAB_FIS1", nombre: "Laboratorio de física 1", ciclo: 2, prerrequisitos: ["FUND_FIS"], desbloquea: ["FIS2"] },
  { id: "DIS_IND", nombre: "Diseño industrial", ciclo: 2, prerrequisitos: [], desbloquea: [] },
  { id: "QUI_GEN", nombre: "Química general", ciclo: 2, prerrequisitos: [], desbloquea: ["QUI_ORG", "BIO"] },
  { id: "INN_BIO", nombre: "Procesos de innovación en bioingeniería", ciclo: 2, prerrequisitos: [], desbloquea: ["FUND_BIO"] },
  { id: "PENS_CRIS", nombre: "Pensamiento cristiano y realidad social", ciclo: 2, prerrequisitos: [], desbloquea: [] },

  // SEGUNDO AÑO - 3 y 4 ciclo
  { id: "CALINT", nombre: "Cálculo integral", ciclo: 3, prerrequisitos: ["CALDIF", "ALGMAT"], desbloquea: ["CALVEC"] },
  { id: "FIS2", nombre: "Física 2", ciclo: 3, prerrequisitos: ["FIS1", "LAB_FIS1"], desbloquea: ["FIS3"] },
  { id: "LAB_FIS2", nombre: "Laboratorio de física 2", ciclo: 3, prerrequisitos: [], desbloquea: ["FIS3"] },
  { id: "FUND_PROG", nombre: "Fundamentos de programación", ciclo: 3, prerrequisitos: ["FIS1"], desbloquea: ["PROG_AVZ", "CIR_SIS"] },
  { id: "QUI_ORG", nombre: "Química orgánica", ciclo: 3, prerrequisitos: ["QUI_GEN"], desbloquea: ["FUND_ANAL", "BIOQ"] },
  { id: "BIO", nombre: "Biología", ciclo: 3, prerrequisitos: ["QUI_GEN"], desbloquea: ["AN_FIS", "BIOQ"] },
  { id: "CALVEC", nombre: "Cálculo vectorial", ciclo: 4, prerrequisitos: ["CALINT"], desbloquea: ["SER_TRF", "BIOEST"] },
  { id: "FIS3", nombre: "Física 3", ciclo: 4, prerrequisitos: ["FIS2", "LAB_FIS2"], desbloquea: ["CIEN_MAT", "PROY_BIO1"] },
  { id: "LAB_FIS3", nombre: "Laboratorio de física 3", ciclo: 4, prerrequisitos: [], desbloquea: [] },
  { id: "FUND_ANAL", nombre: "Fundamentos de análisis instrumental", ciclo: 4, prerrequisitos: ["QUI_ORG"], desbloquea: [] },
  { id: "CIR_ELEC", nombre: "Circuitos eléctricos", ciclo: 4, prerrequisitos: [], desbloquea: ["CIR_SIS"] },
  { id: "FUND_BIO", nombre: "Fundamentos de biodiseño", ciclo: 4, prerrequisitos: ["INN_BIO"], desbloquea: [] },

  // TERCER AÑO - 5 y 6 ciclo
  { id: "AN_FIS", nombre: "Anatomía y Fisiología", ciclo: 5, prerrequisitos: ["BIO"], desbloquea: ["FISIOPAT"] },
  { id: "BIOQ", nombre: "Bioquímica", ciclo: 5, prerrequisitos: ["QUI_ORG", "BIO"], desbloquea: ["MICRO_CEL", "MOL_BIO"] },
  { id: "PROG_AVZ", nombre: "Programación Avanzada", ciclo: 5, prerrequisitos: ["FUND_PROG"], desbloquea: [] },
  { id: "CIEN_MAT", nombre: "Ciencia e Ingeniería de Materiales", ciclo: 5, pr_
