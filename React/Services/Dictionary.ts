/**
 * @description Przykład definowania słownika. Zawsze wykorzystuje się Enumy importowane z /Models/EnumTypes/.
 * Każdy słownik to mapa (Map<Enum, string>)
 */

import * as MovieEnumTypes from '../Models/EnumTypes/MovieTypes';
import { CarClass } from '../Models/EnumTypes/CarTypes';

export const MovieStatus = new Map<MovieEnumTypes.MovieStatus, string>([
    [MovieEnumTypes.MovieStatus.AVAILABLE       , 'Dostępny'],
    [MovieEnumTypes.MovieStatus.NOT_AVAILABLE   , 'Niedostępny']
]);

export const carClass = new Map<CarClass, string>([
    [CarClass.A, "A"],
    [CarClass.Aplus, "A+"],
    [CarClass.B, "B"],
    [CarClass.C, "C"],
    [CarClass.E, "E"]
]);

export const Availability = new Map<boolean, string>([
    [false, "Niedostępny"],
    [true, "Dostępny"]
])
