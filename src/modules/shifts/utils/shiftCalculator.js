// shiftCalculator.js - Lógica para calcular turnos automáticamente

/**
 * Calcula los días de descanso basados en el patrón seleccionado
 * @param {string} pattern - Patrón de turno ('4x4' o '4x3')
 * @param {Date} startDate - Fecha de inicio del ciclo
 * @returns {Object} Objeto con días trabajados y días libres
 */
export function calculateRestDays(pattern, startDate) {
  const workDays = 4;
  const restDays = pattern === '4x4' ? 4 : 3;
  const cycleLength = workDays + restDays;
  
  const schedule = {
    workDays: [],
    restDays: [],
    cycleLength: cycleLength
  };

  for (let i = 0; i < cycleLength; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    
    if (i < workDays) {
      schedule.workDays.push(currentDate.toISOString().split('T')[0]);
    } else {
      schedule.restDays.push(currentDate.toISOString().split('T')[0]);
    }
  }

  return schedule;
}

/**
 * Determina si un usuario está en turno de día o noche
 * @param {string} shiftType - Tipo de turno ('Día' o 'Noche')
 * @returns {Object} Configuración del turno
 */
export function getShiftConfig(shiftType) {
  const configs = {
    'Día': {
      startTime: '06:00',
      endTime: '18:00',
      isDarkMode: false
    },
    'Noche': {
      startTime: '18:00',
      endTime: '06:00',
      isDarkMode: true
    }
  };

  return configs[shiftType] || configs['Día'];
}

/**
 * Asigna automáticamente turno día o noche basado en el ciclo
 * @param {number} dayInCycle - Día dentro del ciclo
 * @returns {string} Tipo de turno
 */
export function assignShiftType(dayInCycle) {
  return dayInCycle % 2 === 0 ? 'Día' : 'Noche';
}